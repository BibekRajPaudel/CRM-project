const catchAsyncErrors = require("../middleware/catchAsyncError");
const countryPageSchema = require("../models/countryPage");
const addUniveristySchema = require("../models/addUniversity");
const coursesSchema = require("../models/Courses");
const ErrorHandler = require("../utils.js/errorHandler");
const LeadFormSchema = require("../models/Form/LeadForm");
const universityProgramSchema = require("../models/Programs");
const classSchema = require("../models/class")
const testSchema = require("../models/Test")
const employeeSchema = require("../models/employee")


//Add task
const addTask = catchAsyncErrors(async (req, res, next) => {
  const formData = await LeadFormSchema.findById(req.params.id);

  formData.task.push({
    ...req.body,
  });

  await formData.save();

  res.status(201).json({
    data: formData.task,
  });
});

//Update Task
const updateTask = catchAsyncErrors(async (req, res, next) => {

  let update = await LeadFormSchema.findByIdAndUpdate(
    req.params.leadId,
    { $set: { "task.$[task].progress": req.body.progress } },
    { arrayFilters: [{ "task._id": req.params.taskId }] }
  );

  res.status(200).json({
    success: true,
    message: "Task updated",
  });
});

//Delete Task
const deleteTask = catchAsyncErrors(async (req, res, next) => {
  let del = await LeadFormSchema.updateOne(
    { _id: req.params.leadId },
    { $pull: { task: { _id: req.params.taskId } } }
  );

  res.status(200).json({
    success: true,
    message: "Task deleted",
  });
});

//Create Country
const createcountry = catchAsyncErrors(async (req, res, next) => {
  

  const {
    countryName,
    studentEnrolled,
    universities,
    processing,
    countryCode,
    continent
  } = req.body;

  const result1 = req.file.path

  const countryPage = await countryPageSchema.create({
    countryName,
    studentEnrolled,
    universities,
    processing,
    countryCode,
    flag:result1,
    continent
  });

  res.status(201).json({
    message: "Country Added Successfully",
    countryPage,
  });
});

//Get all Country
const getCountries = catchAsyncErrors(async (req, res, next) => {
  const countryPage = await countryPageSchema.find({ deleted: false });

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
  const countryPageData = await countryPageSchema.findByIdAndUpdate(
    req.params.id,
    { deleted: true }
  );

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
  const {
    universityName,
    streetNo,
    location,
    country,
    universityType,
    established,
    contact,
    enrolledDate,
    email,
    universityLink,
    programOffered,
    livingAndAccomendation,
    askAnyQuestions,
    descriptionAboutUniversity,
  } = req.body;

  const multipleFiles = req.files;
  const result1 = multipleFiles.profile[0].path;
  const result2 = multipleFiles.background[0].path;

  const addUni = await addUniveristySchema.create({
    universityName,
    streetNo,
    location,
    country,
    universityType,
    established,
    contact,
    enrolledDate,
    email,
    universityLink,
    programOffered,
    livingAndAccomendation,
    askAnyQuestions,
    descriptionAboutUniversity,
    profile: result1,
    background: result2,
  });

  res.status(201).json({
    message: "University added successfully",
    addUni,
  });
});

//Softdelete and find only university which are not deleted
const findUniversity = catchAsyncErrors(async (req, res, next) => {
  const findUni = await addUniveristySchema.find({ deleted: false });

  res.status(201).json({
    message: "University listed successfully",
    findUni,
  });
});

//Get uni by id
const getUniById = catchAsyncErrors(async (req, res, next) => {
  const findUni = await addUniveristySchema.findById(req.params.id);

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

//Edit University for profile and background
const uniPB = catchAsyncErrors(async (req, res, next) => {
  let university = await addUniveristySchema.findById(req.params.id);

  if (!university) {
    return next(new ErrorHandler("University not found", 404));
  }
  let multipleFiles = req.files;
  const result1 = multipleFiles.profile[0].path;
  const result2 = multipleFiles.background[0].path;

  (university.profile = result1), (university.background = result2);

  await university.save();

  res.status(201).json({
    message: "Data edited Successfully",
    university,
  });
});

//Delete University
const deleteUniversity = catchAsyncErrors(async (req, res, next) => {
  let university = await addUniveristySchema.findByIdAndUpdate(req.params.id, {
    deleted: true,
  });

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
const getAllCourses = catchAsyncErrors(async (req, res, next) => {
  const getAllCourses = await coursesSchema.find();

  res.status(201).json({
    message: "University added successfully",
    getAllCourses,
  });
});

//Get all courses by Id
const getCoursesById = catchAsyncErrors(async (req, res, next) => {
  const getAllCourses = await coursesSchema.findById(req.params.id);

  res.status(201).json({
    success: "true",
    getAllCourses,
  });
});

//Edit Courses
const editCourses = catchAsyncErrors(async (req, res, next) => {
  let courses = await coursesSchema.findById(req.params.id);

  const {
    duration,
    livingAndAccomendation,
    qualificationLevel,
    ielts,
    conditionalOffer,
  } = req.body;

  if (!courses) {
    return next(new ErrorHandler("Details not found", 404));
  }

  courses.duration = duration;
  courses.livingAndAccomendation = livingAndAccomendation;
  (courses.ielts = ielts), (courses.conditionalOffer = conditionalOffer);
  courses.qualificationLevel = qualificationLevel;

  await courses.save();

  res.status(201).json({
    message: "Data added Successfully",
    courses,
  });
});

//Add University Programs
const universityPrograms = catchAsyncErrors(async (req, res, next) => {
  const uni = await addUniveristySchema.findById(req.params.id);

  uni.program.push({
    ...req.body,
  });

  await uni.save();
  res.status(201).json({
    message: "Program Added Successfully",
    uni,
  });
});

//Get All University Programs
const getUniversityPrograms = catchAsyncErrors(async (req, res, next) => {
  const findPrograms = await universityProgramSchema.find();

  res.status(200).json({
    success: true,
    findPrograms,
  });
});
//Get Programs By Id
const getUniversityProgramsById = catchAsyncErrors(async (req, res, next) => {
  const findUni = await addUniveristySchema.findById(req.params.id);

  const singleProgram= findUni.program.id(req.params.programId)

  res.status(200).json({
    success: true,
    singleProgram,
  });
});

//Edit University Program by id
const updateProgram = catchAsyncErrors(async (req, res, next) => {
  let update = await addUniveristySchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        "program.$[test].courseName": req.body.courseName,
        "program.$[test].program": req.body.program,
        "program.$[test].level": req.body.level,
        "program.$[test].tutionFeeFirst": req.body.tutionFeeFirst,
        "program.$[test].tutionFeeSecond": req.body.tutionFeeSecond,
        "program.$[test].tutionFeeThird": req.body.tutionFeeThird,
        "program.$[test].selectIntakes": req.body.selectIntakes,
        "program.$[test].coursePeriod": req.body.coursePeriod,
        "program.$[test].courseDescription": req.body.courseDescription
      },
    },
    { arrayFilters: [{ "test._id": req.params.programId }] }
  );

  res.status(200).json({
    success: true,
    message: "Program updated",
  });
});

//Delete Program
const deleteProgram = catchAsyncErrors(async (req, res, next) => {
  let del = await addUniveristySchema.updateOne(
    { _id: req.params.id },
    { $pull: { program: { _id: req.params.programId } } }
  );

  res.status(200).json({
    success: true,
    message: "Program deleted",
  });
});

//Classes
const addClass = catchAsyncErrors(async (req, res, next) => {
  const addClass = await classSchema.create(req.body);

  res.status(201).json({
    message: "Class added successfully",
    addClass,
  });
});

//Get all classes
const getAllClasses = catchAsyncErrors(async (req, res, next) => {
  const getAllClasses = await classSchema.find();

  res.status(201).json({
    message: "Success",
    getAllClasses,
  });
});

//Get class by id
const getClassById = catchAsyncErrors(async (req, res, next) => {
  const getClassById= await classSchema.findById(req.params.id);

  res.status(201).json({
    message: "Success",
    getClassById,
  });
});

//Edit Classes
const editClass = catchAsyncErrors(async (req, res, next) => {
  let editClass = await classSchema.findById(req.params.id);

  if (!editClass) {
    return next(new ErrorHandler("Class not found", 404));
  }

  editClass = await classSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(201).json({
    message: "Class details edited Successfully",
    editClass,
  });
});

//Delete Class
const deleteClass = catchAsyncErrors(async (req, res, next) => {
  let delClass = await classSchema.findById(req.params.id);

  if (!delClass) {
    return next(new ErrorHandler("Class not found", 404));
  }

  await delClass.remove();

  res.status(200).json({
    success: true,
    message: "Class deleted",
  });
});

//Test
const addTest = catchAsyncErrors(async (req, res, next) => {
  const addTest = await testSchema.create(req.body);

  res.status(201).json({
    message: "Test added successfully",
    addTest,
  });
});

//Get all Test
const getAllTest = catchAsyncErrors(async (req, res, next) => {
  const getAllTest = await testSchema.find();

  res.status(201).json({
    message: "Success",
    getAllTest,
  });
});

//Get test by id
const getTestById = catchAsyncErrors(async (req, res, next) => {
  const getTestById= await testSchema.findById(req.params.id);

  res.status(201).json({
    message: "Success",
    getTestById,
  });
});

//Edit Test
const editTest = catchAsyncErrors(async (req, res, next) => {
  let editTest = await testSchema.findById(req.params.id);

  if (!editTest) {
    return next(new ErrorHandler("Test not found", 404));
  }

  editTest = await classSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  res.status(201).json({
    message: "Test edited Successfully",
    editTest,
  });
});

//Delete Test
const deleteTest = catchAsyncErrors(async (req, res, next) => {
  let delTest = await testSchema.findById(req.params.id);

  if (!delTest) {
    return next(new ErrorHandler("Test not found", 404));
  }

  await delTest.remove();

  res.status(200).json({
    success: true,
    message: "Test deleted",
  });
});

//Add Employee
const addEmployee = catchAsyncErrors(async (req, res, next) => {
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
    role
  } = req.body;

  const result = req.file.path;

  const addEmployee = await employeeSchema.create({
    firstName,
    middleName,
    lastName,
    temporaryAddress,
    permanentAddress,
    gender,
    dateOfBirth,
    contactNumber,
    email,
    role,
    user:req.user._id,
    image:result
  });

  res.status(201).json({
    message: "Employee added successfully",
    addEmployee,
  });
});

//Get employee Details
const getEmployeeDetails = catchAsyncErrors(async (req, res, next) => {
  const getDetails = await employeeSchema.find({user:req.user._id});

  res.status(201).json({
    message: "Success",
    getDetails,
  });
});



module.exports = {
  addTask,
  deleteTask,
  createcountry,
  getCountries,
  updateCountryPage,
  deleteCountry,
  addUniversity,
  updateUniversity,
  deleteUniversity,
  addCourses,
  getAllCourses,
  getCoursesById,
  editCourses,
  findUniversity,
  updateTask,
  universityPrograms,
  getUniversityPrograms,
  uniPB,
  getUniById,
  addClass,
  getAllClasses,
  getClassById,
  editClass,
  deleteClass,
  addTest,
  getAllTest,
  getTestById,
  editTest,
  deleteTest,
  addEmployee,
  getUniversityProgramsById,
  updateProgram,
  deleteProgram,
  getEmployeeDetails
};
