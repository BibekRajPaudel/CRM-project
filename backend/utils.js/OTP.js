const User = require("../models/usermodel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils.js/errorHandler");
const sendEmail = require("../utils.js/sendEmail");
const userOtpVerification = require("../models/userOtpVerification");
const bcrypt = require("bcrypt");

//Send OTP verification email
const sendOtpVerificationEmail = catchAsyncErrors(
  async ({ _id, email }, res, next) => {
    try {
      const user = await User.findOne({ email });
      const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

      const message = `Enter ${otp} to verify your email and complete the sign up.This code expires in 1 hour`;

      await sendEmail({
        email: user.email,
        subject: `Please verify your email`,
        message,
      });

      //hash the otp
      const saltRounds = 10;

      const hashedOtp = await bcrypt.hash(otp, saltRounds);

      const newOtpVerification = await new userOtpVerification({
        userId: _id,
        otp: hashedOtp,
        createdAt: Date.now(),
        expiresAt: Date.now() + 3600000,
      });

      await newOtpVerification.save();

      res.json({
        status: "Pending",
        message: "Verification OTP send to email",
        data: {
          userId: _id,
          email,
        },
      });
    } catch (error) {
      res.json({
        status: "Failed",
        message: error.message,
      });
    }
  }
);

// Verify OTP
const verifyOtp = catchAsyncErrors(async (req, res, next) => {
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) {
      return next(new ErrorHandler("Please enter userId or Otp", 400));
    } else {
      const userOtpVerificationRecords = await userOtpVerification.find({
        userId,
      });

      if (userOtpVerificationRecords.length <= 0) {
        return next(
          new ErrorHandler(
            "Account does not exists or has been verified already. Please login or sign up",
            400
          )
        );
      } else {
        const { expiresAt } = userOtpVerificationRecords[0];
        const hashedOtp = userOtpVerificationRecords[0].otp;

        if (expiresAt < Date.now()) {
          await userOtpVerification.deleteMany({ userId });
          return next(
            new ErrorHandler("Otp has expired. Please request again", 400)
          );
        } else {
          const validOtp = await bcrypt.compare(otp, hashedOtp);
          if (!validOtp) {
            return next(new ErrorHandler("Please enter correct OTP", 400));
          } else {
            await User.updateOne({ _id: userId }, { verified: true });
            await userOtpVerification.deleteMany({ userId });
            res.json({
              status: "VERIFIED",
              message: "User email verified successfully",
            });
          }
        }
      }
    }
  } catch (error) {
    res.json({
      status: "Failed",
      message: error.message,
    });
  }
});

// Resend OTP
const resendOtp = catchAsyncErrors(async (req, res, next) => {
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) {
      return next(new ErrorHandler("Please enter userId or Otp", 400));
    } else {
      await userOtpVerification.deleteMany({ userId });
      sendOtpVerificationEmail({ _id: userId, email }, res);
    }
  } catch (error) {
    res.json({
      status: "FAIlED",
      message: error.message,
    });
  }
});

module.exports = {
  sendOtpVerificationEmail,
  verifyOtp,
  resendOtp,
};
