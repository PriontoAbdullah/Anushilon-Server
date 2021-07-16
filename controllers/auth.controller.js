const User = require("../models/auth.model");
const expressJwt = require("express-jwt");
const _ = require("lodash");
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJWT = require("express-jwt");
const { errorHandler } = require("../helpers/dbErrorHandling");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.MAIL_KEY);
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const { google } = require("googleapis");
const activationTemplate = require("../templates/activationTemplate");
const passwordResetTemplate = require("../templates/passwordResetTemplate");

// registration controller
exports.registerController = (req, res) => {
  // connecting to google oAuth2
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLEINT_SECRET,
    process.env.REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  const { name, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      errors: firstError,
    });
  } else {
    User.findOne({
      email,
    }).exec((err, user) => {
      if (user) {
        return res.status(400).json({
          errors: "Email is taken",
        });
      }
    });

    // jwt token creation
    const token = jwt.sign(
      {
        name,
        email,
        password,
      },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: "1d",
      }
    );

    // function for sending email with token
    async function sendMail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.EMAIL_FROM,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLEINT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken,
          },
        });

        const emailData = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: "অনুশীলনে অ্যাকাউন্ট সক্রিয়করণ লিঙ্ক",
          text: `আপনার অ্যাকাউন্টটি সক্রিয় করতে এই লিংকটিতে ক্লিক করুন - ${process.env.CLIENT_URL}/users/activate/${token}`,
          html: activationTemplate(token), // html template
        };

        const result = await transport.sendMail(emailData);
        return result;
      } catch (error) {
        return error;
      }
    }

    // sending mail api request
    sendMail()
      .then((result) => {
        return res.json({
          message: `Email has been sent to ${email}`,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          errors: errorHandler(err),
        });
      });
  }
};

// active register account controller
exports.activationController = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        // console.log("Activation error");
        return res.status(401).json({
          errors: "Expired link. Signup again",
        });
      } else {
        const { name, email, password } = jwt.decode(token);

        console.log(email);
        const user = new User({
          name,
          email,
          password,
        });

        // new user information save to database
        user.save((err, user) => {
          if (err) {
            console.log("Save error", errorHandler(err));
            return res.status(401).json({
              errors: errorHandler(err),
            });
          } else {
            return res.json({
              success: true,
              user,
              message: "Signup success",
            });
          }
        });
      }
    });
  } else {
    return res.json({
      message: "error happening please try again",
    });
  }
};

// manual signIn controller
exports.signinController = (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      errors: firstError,
    });
  } else {
    // check if user exist
    User.findOne({
      email,
    }).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          errors: "User with that email does not exist. Please signup",
        });
      }
      // authenticate
      if (!user.authenticate(password)) {
        return res.status(400).json({
          errors: "Email and password do not match",
        });
      }
      // generate a token and send to client
      const token = jwt.sign(
        {
          _id: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      const { _id, name, email, role } = user;

      return res.json({
        token,
        user: {
          _id,
          name,
          email,
          role,
        },
      });
    });
  }
};

// require signIn jwt secret for login user
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET, // req.user._id
});

// for admin middleware
exports.adminMiddleware = (req, res, next) => {
  User.findById({
    _id: req.user._id,
  }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    if (user.role !== "admin") {
      return res.status(400).json({
        error: "Admin resource. Access denied.",
      });
    }

    req.profile = user;
    next();
  });
};

// forget password controller
exports.forgotPasswordController = (req, res) => {
  // connecting to google oAuth2
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLEINT_SECRET,
    process.env.REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  const { email } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      errors: firstError,
    });
  } else {
    User.findOne(
      {
        email,
      },
      (err, user) => {
        if (err || !user) {
          return res.status(400).json({
            error: "User with that email does not exist",
          });
        }

        // jwt token creation
        const token = jwt.sign(
          {
            _id: user._id,
          },
          process.env.JWT_RESET_PASSWORD,
          {
            expiresIn: "1h",
          }
        );

        // function for sending email with token
        async function sendMail() {
          try {
            const accessToken = await oAuth2Client.getAccessToken();

            const transport = nodemailer.createTransport({
              service: "gmail",
              auth: {
                type: "OAuth2",
                user: process.env.EMAIL_FROM,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLEINT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken,
              },
            });

            const emailData = {
              from: process.env.EMAIL_FROM,
              to: email,
              subject: `অনুশীলনে পাসওয়ার্ড রিসেট লিঙ্ক`,
              text: `আপনার পাসওয়ার্ডটি পুনরায় সেট করতে নীচের লিঙ্কটি ব্যবহার করুন - ${process.env.CLIENT_URL}/users/password/reset/${token}`,
              html: passwordResetTemplate(token), // html template
            };

            const result = await transport.sendMail(emailData);

            return result;
          } catch (error) {
            return error;
          }
        }

        // sending mail api request
        return user.updateOne(
          {
            resetPasswordLink: token,
          },
          (err, success) => {
            if (err) {
              // console.log("RESET PASSWORD LINK ERROR", err);
              return res.status(400).json({
                error:
                  "Database connection error on user password forgot request",
              });
            } else {
              sendMail()
                .then((result) => {
                  // console.log("SIGNUP EMAIL SENT", result);
                  return res.json({
                    message: `Email has been sent to ${email}. Follow the instruction to set your new password`,
                  });
                })
                .catch((err) => {
                  // console.log("SIGNUP EMAIL SENT ERROR", err);
                  return res.json({
                    message: err.message,
                  });
                });
            }
          }
        );
      }
    );
  }
};

// reset password controller
exports.resetPasswordController = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      errors: firstError,
    });
  } else {
    // verify that user jwt token
    if (resetPasswordLink) {
      jwt.verify(
        resetPasswordLink,
        process.env.JWT_RESET_PASSWORD,
        function (err, decoded) {
          if (err) {
            return res.status(400).json({
              error: "Expired link. Try again",
            });
          }

          // update user new hashed password
          User.findOne(
            {
              resetPasswordLink,
            },
            (err, user) => {
              if (err || !user) {
                return res.status(400).json({
                  error: "Something went wrong. Try later",
                });
              }

              const updatedFields = {
                password: newPassword,
                resetPasswordLink: "",
              };

              user = _.extend(user, updatedFields);

              user.save((err, result) => {
                if (err) {
                  return res.status(400).json({
                    error: "Error resetting user password",
                  });
                }
                res.json({
                  message: `Great! Now you can login with your new password`,
                });
              });
            }
          );
        }
      );
    }
  }
};

// creating google oAuth2 client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT);

// google login controller
exports.googleController = (req, res) => {
  const { idToken } = req.body;

  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
    .then((response) => {
      // google client response
      const { email_verified, name, email } = response.payload;
      // if find registered user email
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
              expiresIn: "7d",
            });
            const { _id, email, name, role } = user;
            return res.json({
              token,
              user: { _id, email, name, role },
            });
          } else {
            // if the user doesn't have registered email
            // let password = email + process.env.JWT_SECRET;
            // user = new User({ name, email, password });
            // user.save((err, data) => {
            //   if (err) {
            //     console.log("ERROR GOOGLE LOGIN ON USER SAVE", err);
            //     return res.status(400).json({
            //       error: "User signup failed with google",
            //     });
            //   }
            //   const token = jwt.sign(
            //     { _id: data._id },
            //     process.env.JWT_SECRET,
            //     { expiresIn: "7d" }
            //   );
            //   const { _id, email, name, role } = data;
            //   return res.json({
            //     token,
            //     user: { _id, email, name, role },
            //   });
            // });

            // if the user doesn't have registered email
            return res.status(400).json({
              error:
                "Please register first with this gmail account. Only registered gmail address can sign in with the google account.",
            });
          }
        });
      } else {
        return res.status(400).json({
          error: "Google login failed. Try again",
        });
      }
    });
};

// facebook login controller
exports.facebookController = (req, res) => {
  console.log("FACEBOOK LOGIN REQ BODY", req.body);
  const { userID, accessToken } = req.body;

  // creating facebook client
  const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

  // facebook client response
  return (
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      // .then(response => console.log(response))
      .then((response) => {
        const { email, name } = response;
        User.findOne({ email }).exec((err, user) => {
          // if find registered user email
          if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
              expiresIn: "7d",
            });
            const { _id, email, name, role } = user;
            return res.json({
              token,
              user: { _id, email, name, role },
            });
          } else {
            // if the user doesn't have registered email
            // let password = email + process.env.JWT_SECRET;
            // user = new User({ name, email, password });
            // user.save((err, data) => {
            //   if (err) {
            //     console.log("ERROR FACEBOOK LOGIN ON USER SAVE", err);
            //     return res.status(400).json({
            //       error: "User signup failed with facebook",
            //     });
            //   }
            //   const token = jwt.sign(
            //     { _id: data._id },
            //     process.env.JWT_SECRET,
            //     { expiresIn: "7d" }
            //   );
            //   const { _id, email, name, role } = data;
            //   return res.json({
            //     token,
            //     user: { _id, email, name, role },
            //   });
            // });

            // if the user doesn't have registered email
            return res.status(400).json({
              error:
                "Please register first with this facebook email address. Only registered email address can sign in with the facebook account.",
            });
          }
        });
      })
      .catch((error) => {
        res.json({
          error: "Facebook login failed. Try later",
        });
      })
  );
};
