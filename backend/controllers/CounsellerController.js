const catchAsyncErrors = require("../middleware/catchAsyncError");
const Task = require("../models/Task");
const countryPageSchema = require("../models/countryPage");
const addUniveristySchema = require("../models/Form/addUniversity");
const coursesSchema = require("../models/Form/Courses")
const ErrorHandler = require("../utils.js/errorHandler");

//Add task
const addTask = catchAsyncErrors(async (req, res, next) => {
  const task = await Task.create(req.body);

  res.status(201).json({
    message: "Task added successfully",
    task,
  });
});

//Update Task
const updateTask = catchAsyncErrors(async (req, res, next) => {
  let task = await Task.findById(req.params.id);

  if (!task) {
    return next(new ErrorHandler("Task not found", 404));
  }

  task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    message: "Task updated successfully",
    task,
  });
});

//Create Country
const createcountry = catchAsyncErrors(async (req, res, next) => {
  const countryPage = await countryPageSchema.create(req.body);

  res.status(201).json({
    message: "Country Added Successfully",
    countryPage,
  });
});

//Get all Country
const getCountries = catchAsyncErrors(async (req, res, next) => {
  const countryPage = await countryPageSchema.find({deleted: false});

  res.status(201).json({
    message: "Country Added Successfully",
    countryPage,
  });
});

//Update Country Page
const updateCountryPage = catchAsyncErrors(async (req, res, next) => {
  const countryPageData = await countryPageSchema.findById(req.params.id);

  if (!countryPageData) {
    return next(new ErrorHandler("Data not found ", 404));
  }

  formData = await countryPageSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(201).json({
    message: "Data edited Successfully",
    countryPageData,
  });
});

//Delete Country Page
const deleteCountry = catchAsyncErrors(async (req, res, next) => {
  const countryPageData = await countryPageSchema.findByIdAndUpdate(req.params.id, { deleted: true });

  if (!countryPageData) {
    return next(new ErrorHandler("Data not found", 404));
  }

  // await countryPageData.remove();

  res.status(200).json({
    success: true,
    message: "Country Deleted",
  });
});

//Add University
const addUniversity = catchAsyncErrors(async (req, res, next) => {
  const addUni = await addUniveristySchema.create(req.body);

  res.status(201).json({
    message: "University added successfully",
    addUni,
  });
});

const findUniversity = catchAsyncErrors(async (req, res, next) => {
  const findUni = await addUniveristySchema.find({deleted: false});

  res.status(201).json({
    message: "University listed successfully",
    findUni,
  });
});

//Edit University
const updateUniversity = catchAsyncErrors(async (req, res, next) => {
  let university = await addUniveristySchema.findById(req.params.id);

  if (!university) {
    return next(new ErrorHandler("University not found", 404));
  }

  university = await addUniveristySchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(201).json({
    message: "Data edited Successfully",
    university,
  });
});

//Delete University
const deleteUniversity = catchAsyncErrors(async (req, res, next) => {
  let university = await addUniveristySchema.findByIdAndUpdate(req.params.id, { deleted: true });
  
  if (!university) {
    return next(new ErrorHandler("University not found", 404));
  }
  
  res.status(200).json({
    success: true,
    message: "University Deleted",
  });
});

//Add Courses
const addCourses = catchAsyncErrors(async (req, res, next) => {
  const addCourses = await coursesSchema.create(req.body);

  res.status(201).json({
    message: "University added successfully",
    addCourses,
  });
});

//Get all courses
const getCourses = catchAsyncErrors(async (req, res, next) => {
  const getCourses = await coursesSchema.find();

  res.status(201).json({
    message: "University added successfully",
    getCourses,
  });
});

module.exports = {
  addTask,
  updateTask,
  createcountry,
  getCountries,
  updateCountryPage,
  deleteCountry,
  addUniversity,
  updateUniversity,
  deleteUniversity,
  addCourses,
  getCourses,
  findUniversity
};
