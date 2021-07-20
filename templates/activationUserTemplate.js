const activationUserTemplate = (
  token,
  institution,
  name,
  email,
  mobile,
  role
) => {
  return `<html>
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!-- Latest compiled and minified CSS -->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
  
      <style type="text/css">
        @import url("https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");
  
        /* CLIENT-SPECIFIC STYLES */
        body,
        table,
        td,
        a {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
  
        table,
        td {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
  
        img {
          -ms-interpolation-mode: bicubic;
        }
  
        /* RESET STYLES */
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
        }
  
        table {
          border-collapse: collapse !important;
        }
  
        body {
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }
  
        /* iOS BLUE LINKS */
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
  
        /* MOBILE STYLES */
        @media screen and (max-width: 600px) {
          h1 {
            font-size: 32px !important;
            line-height: 32px !important;
          }
        }
  
        /* ANDROID CENTER FIX */
        div[style*="margin: 16px 0;"] {
          margin: 0 !important;
        }
      </style>
    </head>
  
    <body
      style="
        background-color: #f4f4f4;
        margin: 0 !important;
        padding: 0 !important;
      "
    >
      <!-- HIDDEN PREHEADER TEXT -->
      <div
        style="
          display: none;
          font-size: 1px;
          color: #fefefe;
          line-height: 1px;
          font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
          max-height: 0px;
          max-width: 0px;
          opacity: 0;
          overflow: hidden;
        "
      >
      আমরা আপনাকে পেয়ে অত্যন্ত উৎসাহিত! আপনার নতুন একাউন্ট একটিভ করুন।
      </div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
          <td bgcolor="#2A2A57" align="center">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  align="center"
                  valign="top"
                  style="padding: 40px 10px 40px 10px"
                ></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#2A2A57" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="center"
                  valign="top"
                  style="
                    padding: 40px 20px 20px 20px;
                    border-radius: 4px 4px 0px 0px;
                    color: #111111;
                    font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
                    font-size: 32px;
                    font-weight: 400;
                    line-height: 48px;
                  "
                >
                  <h1
                    style="font-size: 35px; font-weight: 400; margin-bottom: 20px; letter-spacing: 1px;"
                  >
                    অনুশীলনে আপনাকে স্বাগতম!
                  </h1>
                  <img
                    src="https://res.cloudinary.com/prionto/image/upload/v1626700849/FB_Post_s8dabq.png"
                    width="400"
                    style="display: block; border: 0px"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 20px 30px;
                    color: #666666;
                    font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 30px;
                    letter-spacing: 0.5px;
                  "
                >
                  <p style="margin: 0">
                    আমরা আপনাকে পেয়ে অত্যন্ত উৎসাহিত। প্রথমে, আপনার একাউন্ট
                    নিশ্চিত করা প্রয়োজন, তাই কেবল নীচের "একাউন্ট নিশ্চিত করুন" বাটন টিতে ক্লিক করে আপনার একাউন্টি একটিভ করুন।
                  </p>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" align="left">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td
                        bgcolor="#ffffff"
                        align="center"
                        style="padding: 15px 30px 45px 30px"
                      >
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td
                              align="center"
                              style="border-radius: 3px"
                              bgcolor="#2A2A57"
                            >
                              <a
                                href=${
                                  process.env.CLIENT_URL
                                }/users/activate/${token} 
                                target="_blank"
                                style="
                                  font-size: 20px;
                                  font-family: 'Hind Siliguri', 'Open Sans',
                                    sans-serif;
                                  color: #ffffff;
                                  text-decoration: none;
                                  color: #ffffff;
                                  text-decoration: none;
                                  padding: 15px 25px;
                                  border-radius: 2px;
                                  border: 1px solid #2a2a57;
                                  display: inline-block;
                                  letter-spacing: 0.5px;
                                "
                                >একাউন্ট নিশ্চিত করুন</a
                              >
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 0px 30px 0px 30px;
                    color: #666666;
                    font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 30px;
                    letter-spacing: 0.5px;
                  "
                >
                  <p style="margin: 0">
                  এই লিঙ্কটিতে সংবেদনশীল ডেটা রয়েছে। যদি এই বাটনটি কাজ না করে তবে আপনার ব্রাউজারে নীচের লিঙ্কটিতে ক্লিক করুন অথবা লিংক কপি করুন এবং পেস্ট করুন:
                  </p>
                </td>
              </tr>
              <!-- COPY -->
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 20px 30px 20px 30px;
                    color: #666666;
                    font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 25px;
                  "
                >
                  <p style="margin: 0">
                    <a
                      href=${process.env.CLIENT_URL}/users/activate/${token} 
                      target="_blank"
                      style="color: #2a2a57; text-decoration: none;"
                    >
                    ${process.env.CLIENT_URL}/users/activate/${token}
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 0px 30px 20px 30px;
                    color: #666666;
                    font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 30px;
                    letter-spacing: 0.5px;
                  "
                >
                  <p style="margin: 0">
                    আপনার যদি কোনও প্রশ্ন থাকে তবে কেবল এই ইমেলে মেইল করুন - আমরা
                    সবসময় সহায়তা করে আপনাকে সন্তুষ্ট রাখবো। আমরা আপনার সকল গোপনীয়তা বজায় রাখি। 
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="left"
                  style="
                    padding: 0px 30px 40px 30px;
                    border-radius: 0px 0px 4px 4px;
                    color: #666666;
                    font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 30px;
                    letter-spacing: 0.5px;
                  "
                >
                  <p style="margin: 0">
                    <a
                      href="https://prionto-71.web.app/"
                      target="_blank"
                      style="color: #2a2a57; text-decoration: none;"
                    >
                      প্রিয়ন্ত আব্দুল্লাহ, </a
                    ><br />
                    অনুশীলন টিম
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
        <td
          bgcolor="#f4f4f4"
          align="center"
          style="padding: 30px 10px 0px 10px"
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 600px"
          >
            <tr>
              <td
                bgcolor="#E8EAF6"
                align="center"
                style="
                  padding: 30px 30px 30px 30px;
                  border-radius: 4px 4px 4px 4px;
                  color: #666666;
                  font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 30px;
                "
              >
                <h2
                  style="
                    font-size: 20px;
                    font-weight: 400;
                    color: #111111;
                    margin: 0;
                    padding-bottom: 10px;
                  "
                >
                নতুন একটি একাউন্ট একটিভ হওয়ার তথ্য সমূহ 
                </h2>
                <p style="margin: 0">
                  শিক্ষা প্রতিষ্ঠানের নাম: ${institution}
                </p>
                <p style="margin: 0">
                  ${
                    role === "student"
                      ? "শিক্ষার্থীর নাম : "
                      : "শিক্ষকের নাম : "
                  } ${name}
                </p>
                <p style="margin: 0">
                  ইমেইল : ${email}
                </p>
                <p style="margin: 0">
                  মোবাইল : ${mobile}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

        <tr>
          <td
            bgcolor="#f4f4f4"
            align="center"
            style="padding: 30px 10px 0px 10px"
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#E8EAF6"
                  align="center"
                  style="
                    padding: 30px 30px 30px 30px;
                    border-radius: 4px 4px 4px 4px;
                    color: #666666;
                    font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 30px;
                  "
                >
                  <h2
                    style="
                      font-size: 20px;
                      font-weight: 400;
                      color: #111111;
                      margin: 0;
                      letter-spacing: 0.5px;
                    "
                  >
                    আরও সাহায্য দরকার ?
                  </h2>
                  <p style="margin: 0">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=anushilon.bd.gov@gmail.com"
                      target="_blank"
                      style="color: #2a2a57; text-decoration: none; letter-spacing: 0.5px;"
                      >আপনাকে সাহায্য করার জন্য আমরা এখানে আছি</a
                    >
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="max-width: 600px"
            >
              <tr>
                <td
                  bgcolor="#f4f4f4"
                  align="left"
                  style="
                    padding: 0px 0px 30px 0px;
                    color: #666666;
                    font-family: 'Hind Siliguri', 'Open Sans', sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 18px;
                    letter-spacing: 0.5px;
                  "
                >
                  <br />
                  <p style="margin: 0">
                    যদি এই ইমেলগুলি বিরক্তিকর হয়ে ওঠে তবে আপনি দয়া করে
                    <a
                      href="#"
                      target="_blank"
                      style="color: #474747; font-weight: 600;  text-decoration: none;"
                    >
                      আনসাবস্ক্রাইব করুন</a
                    >
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
  
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
};

module.exports = activationUserTemplate;
