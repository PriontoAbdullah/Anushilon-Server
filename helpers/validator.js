const { check } = require("express-validator");
exports.validSign = [
  check("name", "নাম দেওয়া আবশ্যক")
    .notEmpty()
    .isLength({
      min: 4,
      max: 32,
    })
    .withMessage("নামটি অবশ্যই ৪ থেকে ৩২ বর্ণের মধ্যে দিতে হবে"),
  check("email").isEmail().withMessage("একটি বৈধ ইমেইল ঠিকানা আবশ্যক"),
  check("password", "পাসওয়ার্ড দেওয়া আবশ্যক").notEmpty(),
  check("password")
    .isStrongPassword()
    .withMessage(
      "পাসওয়ার্ডটি কমপক্ষে ৮ টি অক্ষরের দীর্ঘ হতে হবে এবং কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি নম্বর এবং একটি চিহ্ন থাকতে হবে"
    ),
];

exports.validLogin = [
  check("email").isEmail().withMessage("একটি বৈধ ইমেইল ঠিকানা আবশ্যক"),
  check("password", "পাসওয়ার্ড দেওয়া আবশ্যক").notEmpty(),
  check("password")
    .isStrongPassword()
    .withMessage(
      "পাসওয়ার্ডটি কমপক্ষে ৮ টি অক্ষরের দীর্ঘ হতে হবে এবং কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি নম্বর এবং একটি চিহ্ন থাকতে হবে"
    ),
];

exports.forgotPasswordValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("একটি বৈধ ইমেইল ঠিকানা আবশ্যক"),
];

exports.resetPasswordValidator = [
  check("newPassword")
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .isStrongPassword()
    .withMessage(
      "পাসওয়ার্ডটি কমপক্ষে ৮ টি অক্ষরের দীর্ঘ হতে হবে এবং কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি নম্বর এবং একটি চিহ্ন থাকতে হবে"
    ),
];
