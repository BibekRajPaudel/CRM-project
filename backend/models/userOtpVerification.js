const mongoose = require("mongoose")

const userOtpVerification = new mongoose.Schema({
    userId: {
      type: String
    },
    otp: {
      type: String
    },
    createdAt:Date,
    expiresAt:Date
  });

  module.exports = mongoose.model("userOtpVerification", userOtpVerification);