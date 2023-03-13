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
const countryFormSchema = require("../models/countryForm");
const visaApplyPaymentchema = require("../models/Form/Payment");
const counsellorSchema = require("../models/Form/CounsellorDetail");
const { sendOtpVerificationEmail } = require("../utils.js/OTP");
const { datacatalog } = require("googleapis/build/src/apis/datacatalog");

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

//Get userDetails
const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

//Edit User Details
const editUserDetails = catchAsyncErrors(async (req, res, next) => {
  const { permanentAddress, temporaryAddress, dateOfBirth, contact, gender } =
    req.body;
  let user = await User.findById(req.user._id);

  user.temporaryAddress = temporaryAddress;
  user.permanentAddress = permanentAddress;
  user.dateOfBirth = dateOfBirth;
  user.contact = contact;
  user.gender = gender;

  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
});

//Edit User Details File
const editFiles = catchAsyncErrors(async (req, res, next) => {
  let update = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        "report.$[details].file": req.body.file.path,
        "report.$[details].collegeName": req.body.name,
      },
    },
    { arrayFilters: [{ "details._id": req.params.reportsId }] }
  );

  res.status(200).json({
    success: true,
    message: "Documents updated",
  });
});

//Add Report
const addReport = catchAsyncErrors(async (req, res, next) => {
  const data = await User.findById(req.user._id);

  data.report.push({
    pdf:req.file.path,
    name:req.body.name
  });

  await data.save();

  res.status(201).json({
    data
  });
});
//Delete Task
const deleteReport = catchAsyncErrors(async (req, res, next) => {
  let del = await User.updateOne(
    { _id: req.user._id },
    { $pull: { report: { _id: req.params.reportsId } } }
  );

  res.status(200).json({
    success: true,
    message: "Report deleted",
  });
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
    academicDetails,
    addCounsellor,
    task,
  } = req.body;

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
    academicDetails,
    addCounsellor,
    task,
  });
  console.log("true")

  res.status(201).json({
    success: true,
    FormField,
  });
});

//Get all LeadForm Data
const leadFormData = catchAsyncErrors(async (req, res, next) => {
  // const formData = await LeadFormSchema.find().populate("addCounsellor");
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

//File Upload for personal documents
const fileUpload = catchAsyncErrors(async (req, res, next) => {
  let result2, result3;
  const multipleFiles = req.files;

  result2 = multipleFiles.uploadCitizenship[0].path;
  result3 = multipleFiles.uploadPassport[0].path;

  let update = await LeadFormSchema.findByIdAndUpdate(req.params.id, {
    $set: { uploadCitizenship: result2, uploadPassport: result3 },
  });

  res.status(200).json({
    success: "File uploaded successfully",
  });
});

//File Upload for academic documents
const academicUpload = catchAsyncErrors(async (req, res, next) => {
  let result1;
  const file = req.file;
  result1 = file.path;

  let update = await LeadFormSchema.findByIdAndUpdate(
    req.params.leadId,
    {
      $set: {
        "academicDetails.$[sheet].uploadMarkSheet": result1,
      },
    },
    { arrayFilters: [{ "sheet._id": req.params.sheetId }] }
  );

  res.status(200).json({
    success: "File updated successfully",
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

//Edit leadform-academicDetails
const updateAcademicDetails = catchAsyncErrors(async (req, res, next) => {
  let update = await LeadFormSchema.findByIdAndUpdate(
    req.params.leadId,
    {
      $set: {
        "academicDetails.$[details].Education": req.body.Education,
        "academicDetails.$[details].collegeName": req.body.collegeName,
        "academicDetails.$[details].joinedYear": req.body.joinedYear,
        "academicDetails.$[details].passedYear": req.body.passedYear,
      },
    },
    { arrayFilters: [{ "details._id": req.params.academicDetailsId }] }
  );

  res.status(200).json({
    success: true,
    message: "Documents updated",
  });
});
//Get academicDetails
const getAcademicDetailsById = catchAsyncErrors(async (req, res, next) => {
  const formData = await LeadFormSchema.findById(req.params.leadId);

  const academicDetail = formData.academicDetails.id(
    req.params.academicDetailsId
  );

  res.status(200).json({
    success: true,
    academicDetail,
  });
});

//Add English Test
const addEnglishTest = catchAsyncErrors(async (req, res, next) => {
  const formData = await LeadFormSchema.findById(req.params.id);

  formData.englishTest.push({
    ...req.body,
  });

  await formData.save();

  res.status(201).json({
    data: formData.englishTest,
  });
});

//Edit leadform-EnglishTest
const updateEnglishTest = catchAsyncErrors(async (req, res, next) => {
  let update = await LeadFormSchema.findByIdAndUpdate(
    req.params.leadId,
    {
      $set: {
        "englishTest.$[test].givenExamDate": req.body.givenExamDate,
        "englishTest.$[test].Reading": req.body.Reading,
        "englishTest.$[test].Writing": req.body.Writing,
        "englishTest.$[test].Speaking": req.body.Speaking,
        "englishTest.$[test].Listening": req.body.Listening,
        "englishTest.$[test].overallScore": req.body.overallScore,
        "englishTest.$[test].testType": req.body.testType,
      },
    },
    { arrayFilters: [{ "test._id": req.params.TestId }] }
  );

  res.status(200).json({
    success: true,
    message: "Documents updated",
  });
});

//Get english test by id
const getEnglishTestById = catchAsyncErrors(async (req, res, next) => {
  const formData = await LeadFormSchema.findById(req.params.leadId);

  const engTest = formData.englishTest.id(req.params.TestId);

  res.status(200).json({
    success: true,
    engTest,
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

//Update only the counsellor
const updateOnlyCounsellor = catchAsyncErrors(async (req, res, next) => {
  const counsellor = req.body;
  let formData = await LeadFormSchema.findById(req.params.id);

  if (!formData) {
    return next(new ErrorHandler("Form Data not found ", 404));
  }

  formData = await LeadFormSchema.findByIdAndUpdate(req.params.id, counsellor, {
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

//Add Counsellor
const addCounsellor = catchAsyncErrors(async (req, res, next) => {
  const formData = await LeadFormSchema.findById(req.params.id);

  formData.addCounsellor.push({
    ...req.body,
  });

  await formData.save();

  res.status(201).json({
    data: formData.addCounsellor,
  });
});

//Edit Counsellor
const editCounsellorDetails = catchAsyncErrors(async (req, res, next) => {
  const counsellorDetailsId = req.params.id;
  const formData = await LeadFormSchema.findById(req.body._id);

  if (formData) {
    const counsellorDetails = [...formData.addCounsellor];

    const counsellorDetail = counsellorDetails.find(
      (x) => x._id.toString() === counsellorDetailsId
    );

    counsellorDetail.name = req.body.name || counsellorDetail.name;
    counsellorDetail.contact = req.body.contact || counsellorDetail.contact;
    counsellorDetail.email = req.body.email || counsellorDetail.email;
  }

  await formData.save();

  res.status(200).json({
    msg: "Counsellors Updated Successfully",
  });
});

//Get all Counsellor
const getCounsellor = catchAsyncErrors(async (req, res, next) => {
  const counsellor = await counsellorSchema.find();

  res.status(200).json({
    success: true,
    counsellor,
  });
});

//Delete Counsellor
const deleteCounsellor = catchAsyncErrors(async (req, res, next) => {
  let del = await LeadFormSchema.updateOne(
    { _id: req.params.leadId },
    { $pull: { addCounsellor: { _id: req.params.counsellorId } } }
  );

  res.status(200).json({
    success: true,
    message: "Counsellor deleted",
  });
});

//Add Payment
const addPayment = catchAsyncErrors(async (req, res, next) => {
  const formData = await LeadFormSchema.findById(req.params.id);

  const pdf = req.file;
  const path = pdf.path;

  formData.payment.push({
    name: req.body.name,
    bank: req.body.bank,
    paymentFor: req.body.paymentFor,
    totalAmount: req.body.totalAmount,
    date: req.body.date,
    receipt: path,
  });

  await formData.save();

  res.status(201).json({
    data: formData.payment,
  });
});

//Edit Payment except receipt
const editPayment = catchAsyncErrors(async (req, res, next) => {
  let update = await LeadFormSchema.findByIdAndUpdate(
    req.params.leadId,
    {
      $set: {
        "payment.$[receipt].name": req.body.name,
        "payment.$[receipt].bank": req.body.bank,
        "payment.$[receipt].paymentFor": req.body.paymentFor,
        "payment.$[receipt].totalAmount": req.body.totalAmount,
        "payment.$[receipt].date": req.body.date,
      },
    },
    { arrayFilters: [{ "receipt._id": req.params.paymentId }] }
  );

  res.status(201).json({
    success: "Edited successfully",
  });
});

//Edit Payment - receipt
const editPaymentReceipt = catchAsyncErrors(async (req, res, next) => {
  let update = await LeadFormSchema.findByIdAndUpdate(
    req.params.leadId,
    {
      $set: {
        "payment.$[file].receipt": req.file.path,
      },
    },
    { arrayFilters: [{ "file._id": req.params.paymentId }] }
  );

  res.status(201).json({
    success: "Receipt updated successfully",
  });
});

//Get paymentbyid
const getPaymentById = catchAsyncErrors(async (req, res, next) => {
  const formData = await LeadFormSchema.findById(req.params.leadId);

  const paymentbyid = formData.payment.id(req.params.paymentId);

  res.status(200).json({
    success: "true",
    paymentbyid,
  });
});

//Delete Payment
const deletePayment = catchAsyncErrors(async (req, res, next) => {
  let del = await LeadFormSchema.updateOne(
    { _id: req.params.leadId },
    { $pull: { payment: { _id: req.params.paymentId } } }
  );

  res.status(200).json({
    success: true,
    message: "Payment deleted",
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
  fileUpload,
  updateLeadFormStatus,
  addCounsellor,
  getCounsellor,
  updateOnlyCounsellor,
  editCounsellorDetails,
  deleteCounsellor,
  updateLeadFormDataById,
  academicUpload,
  updateAcademicDetails,
  getAcademicDetailsById,
  updateEnglishTest,
  addEnglishTest,
  getEnglishTestById,
  addPayment,
  editPayment,
  editPaymentReceipt,
  getPaymentById,
  deletePayment,
  getUserDetails,
  editUserDetails,
  editFiles,
  addReport,
  deleteReport
};
