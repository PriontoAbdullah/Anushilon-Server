const express = require("express");
const router = express.Router();

// Load Controllers
const {
  registerController,
  registrationController,
  activationController,
  signinController,
  forgotPasswordController,
  resetPasswordController,
  googleController,
  facebookController,
} = require("../controllers/auth.controller");

const {
  validSign,
  validUserSign,
  validLogin,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../helpers/validator");

router.post("/register", validSign, registerController);

router.post("/registration", validUserSign, registrationController);

router.post("/login", validLogin, signinController);

router.post("/activation", activationController);

// forgot reset password
router.put(
  "/forgotpassword",
  forgotPasswordValidator,
  forgotPasswordController
);
router.put("/resetpassword", resetPasswordValidator, resetPasswordController);

// Google and Facebook Login
router.post("/googlelogin", googleController);
router.post("/facebooklogin", facebookController);
module.exports = router;
