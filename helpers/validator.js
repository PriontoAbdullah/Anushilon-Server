const { check } = require("express-validator");
exports.validSign = [
  check("name", "নাম দেওয়া আবশ্যক 😒")
    .notEmpty()
    .isLength({
      min: 4,
      max: 25,
    })
    .withMessage("নামটি অবশ্যই ৪ থেকে ২৫ বর্ণের মধ্যে দিতে হবে 😕")
    .trim(),
  check("email")
    .isEmail()
    .withMessage("একটি বৈধ ইমেইল ঠিকানা আবশ্যক 😒")
    .trim(),
  check("password", "পাসওয়ার্ড দেওয়া আবশ্যক").notEmpty(),
  check("password")
    .isStrongPassword()
    .withMessage(
      "পাসওয়ার্ডটি কমপক্ষে ৮ টি অক্ষরের দীর্ঘ হতে হবে এবং কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি নম্বর এবং একটি চিহ্ন থাকতে হবে 🙏"
    ),
];

exports.validUserSign = [
  check("institution")
    .notEmpty()
    .withMessage("শিক্ষা প্রতিষ্ঠানের নাম থাকা আবশ্যক 😒"),
  check("name", "নাম দেওয়া আবশ্যক 😒")
    .notEmpty()
    .isLength({
      min: 4,
      max: 25,
    })
    .withMessage("নামটি অবশ্যই ৪ থেকে ২৫ বর্ণের মধ্যে দিতে হবে 😕")
    .trim(),
  check("email")
    .isEmail()
    .withMessage("একটি বৈধ ইমেইল ঠিকানা আবশ্যক 😒")
    .trim(),
  check("mobile")
    .isMobilePhone("bn-BD", {
      strictMode: true,
    })
    .withMessage(
      "মোবাইল নম্বর অবশ্যই বৈধ বাংলাদেশী মোবাইল নম্বর হতে হবে। কান্ট্রি কোড ব্যবহার করুন। 🙏"
    ),
  check("password", "পাসওয়ার্ড দেওয়া আবশ্যক").notEmpty(),
  check("password")
    .isStrongPassword()
    .withMessage(
      "পাসওয়ার্ডটি কমপক্ষে ৮ টি অক্ষরের দীর্ঘ হতে হবে এবং কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি নম্বর এবং একটি চিহ্ন থাকতে হবে 🙏"
    ),
];

exports.validLogin = [
  check("email")
    .isEmail()
    .withMessage("একটি বৈধ ইমেইল ঠিকানা আবশ্যক 😒")
    .trim(),
  check("password", "পাসওয়ার্ড দেওয়া আবশ্যক").notEmpty(),
  check("password")
    .isStrongPassword()
    .withMessage(
      "পাসওয়ার্ডটি কমপক্ষে ৮ টি অক্ষরের দীর্ঘ হতে হবে এবং কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি নম্বর এবং একটি চিহ্ন থাকতে হবে 🙏"
    ),
];

exports.forgotPasswordValidator = [
  check("forgetEmail")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("একটি বৈধ ইমেইল ঠিকানা আবশ্যক 😒")
    .trim(),
];

exports.resetPasswordValidator = [
  check("newPassword")
    .isStrongPassword()
    .withMessage(
      "পাসওয়ার্ডটি কমপক্ষে ৮ টি অক্ষরের দীর্ঘ হতে হবে এবং কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি নম্বর এবং একটি চিহ্ন থাকতে হবে 🙏"
    ),
];
