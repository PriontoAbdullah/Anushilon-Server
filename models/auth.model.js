const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const crypto = require('crypto');
// user schema
const userScheama = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,
    avatar: {
      type: String,
      default: 'https://i.ibb.co/1Ks65g5/avatar.png',
    },
    role: {
      type: String,
      enum: ['institution', 'student', 'teacher'],
      default: 'student',
    },
    address: {
      type: String,
      default: '',
    },
    story: {
      type: String,
      default: '',
      maxlength: 200,
    },
    website: {
      type: String,
      default: '',
    },
    followers: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
    following: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
    saved: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
    resetPasswordLink: {
      data: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// virtual
userScheama
  .virtual('password')
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// methods
userScheama.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  },
};

module.exports = mongoose.model('User', userScheama);
