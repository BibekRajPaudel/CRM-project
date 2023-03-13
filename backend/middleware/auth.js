const ErrorHandler = require("../utils.js/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(
        new ErrorHandler("Please Login to access this resource", 401)
      );
    }


    const decodedData = jwt.verify(token, "SDGSDGSD2134SDFWETWDF2");
    req.user = await User.findById(decodedData.id);

    next();
  }
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
