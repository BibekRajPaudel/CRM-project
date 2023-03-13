const User = require("../models/usermodel");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils.js/errorHandler");
const sendToken = require("../utils.js/jwtToken");
const sendEmail = require("../utils.js/sendEmail");
const crypto = require("crypto");
const LeadFormSchema = require("../models/Form/LeadForm");
const StudentProfileSchema = require("../models/StudentProfile");
const cloudinary = require("cloudinary");
require("../utils.js/cloudinary");
const Task = require("../models/Task");
const countryFormSchema = require("../models/Form/countryForm");
const testPaymentSchema = require("../models/Form/testPayment");
const visaApplyPaymentchema = require("../models/Form/visaApplyPayment");

//Create StudentProfile
const StudentProfile = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;
  const photo = req.file;
  const result = await cloudinary.v2.uploader.upload(photo.path);

  const user = await StudentProfileSchema.create({
    name,
    avatar: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  });

  res.status(201).json({
    success: true,
    user,
  });
});

//Update StudentProfile
const updateStudentProfile = catchAsyncErrors(async (req, res, next) => {
  const photo = req.file;
  const user = await StudentProfileSchema.findById({ _id: req.params.id });
  const result = await cloudinary.v2.uploader.upload(photo.path);

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  user.avatar = {
    public_id: result.public_id,
    url: result.secure_url,
  };
  await user.save();

  res.status(201).json({
    success: true,
    message: "Profile Updated Successfully",
  });
});

// Register a User
const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new ErrorHandler("User Already Exists", 400));
  }

  if (password !== confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  const user = await User.create({
    name,
    email,
    password,
    confirmPassword,
  });

  sendToken(user, 200, res);
});

// Login User
const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});

// Logout User
const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

//Forgot Password
const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  //Get reset password token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

//ResetPassword
const resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not password", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// LeadForm
const LeadForm = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    middleName,
    lastName,
    temporaryAddress,
    permanentAddress,
    gender,
    dateOfBirth,
    contactNumber,
    email,
    Education,
    collegeName,
    joinedYear,
    passedYear,
    interestedCountry,
    interestedUniversity,
    chooseTheDegree,
    chooseTheCourse,
    applyingFor,
    examBefore,
    testType,
    givenExamDate,
    Reading,
    Writing,
    Speaking,
    Listening,
    overallScore,
    bookAvailableCounseller,
    Referal,
    Comments,
  } = req.body;

  const multipleFiles = req.files;
  const result1 =  multipleFiles.uploadMarkSheet[0].path
  const result2 = multipleFiles.uploadCitizenship[0].path
  const result3 = multipleFiles.uploadPassword[0].path

  const FormField = await LeadFormSchema.create({
    firstName,
    middleName,
    lastName,
    temporaryAddress,
    permanentAddress,
    gender,
    dateOfBirth,
    contactNumber,
    email,
    uploadCitizenship: result2,
    uploadPassword: result3,
    Education,
    collegeName,
    joinedYear,
    passedYear,
    uploadMarkSheet: result1,
    interestedCountry,
    interestedUniversity,
    chooseTheDegree,
    chooseTheCourse,
    applyingFor,
    examBefore,
    testType,
    givenExamDate,
    Reading,
    Writing,
    Speaking,
    Listening,
    overallScore,
    bookAvailableCounseller,
    Referal,
    Comments,
  });

  res.status(201).json({
    success: true,
    FormField,
  });
});

//Get all LeadForm Data
const leadFormData = catchAsyncErrors(async (req, res, next) => {
  const formData = await LeadFormSchema.find();

  res.status(200).json({
    success: true,
    formData,
  });
});

//Get all leadForm Data by id
const leadFormDataById = catchAsyncErrors(async (req, res, next) => {
  const formData = await LeadFormSchema.findById(req.params.id);

  res.status(200).json({
    success: true,
    formData,
  });
});

//Edit the leadform data by id
const updateLeadFormDataById = catchAsyncErrors(async (req, res, next) => {
  let formData = await LeadFormSchema.findById(req.params.id);

  if (!formData) {
    return next(new ErrorHandler("Form Data not found ", 404));
  }

  formData = await LeadFormSchema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    formData,
  });
});

//Update only the status
const updateLeadFormStatus = catchAsyncErrors(async (req, res, next) => {
  const status = req.body;
  let formData = await LeadFormSchema.findById(req.params.id);

  if (!formData) {
    return next(new ErrorHandler("Form Data not found ", 404));
  }

  formData = await LeadFormSchema.findByIdAndUpdate(req.params.id, status, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    formData,
  });
});

//Create Form1
const countryForm = catchAsyncErrors(async (req, res, next) => {
  const country = await countryFormSchema.create(req.body);

  res.status(201).json({
    success: true,
    country,
  });
});

//Create Form2-Test Payment Slip
const testPaymentForm = catchAsyncErrors(async (req, res, next) => {
  const testPayment = await testPaymentSchema.create(req.body);

  res.status(201).json({
    success: true,
    testPayment,
  });
});

//Create Form2-Visa Payment Slip
const visaPaymentForm = catchAsyncErrors(async (req, res, next) => {
  const visaPayment = await visaApplyPaymentchema.create(req.body);

  res.status(201).json({
    success: true,
    visaPayment,
  });
});

module.exports = {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  LeadForm,
  StudentProfile,
  updateStudentProfile,
  countryForm,
  leadFormData,
  leadFormDataById,
  updateLeadFormDataById,
  updateLeadFormStatus,
  testPaymentForm,
  visaPaymentForm,
};
