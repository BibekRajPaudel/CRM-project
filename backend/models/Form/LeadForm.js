const mongoose = require("mongoose");
const AcademicDetailsSchema = require("../Form/AcademicDetails");
const englishTestSchema = require("./EnglishTest");
const counsellorSchema = require("./CounsellorDetail")
const taskSchema = require("./Task");
const paymentSchema = require("./Payment");

const LeadForm = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: false,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: [false, "Please provide your last name"],
  },
  temporaryAddress: {
    type: String,
    required: [false, "Please provide your temporary Address"],
  },
  permanentAddress: {
    type: String,
    required: [false, "Please provide your permanent Address"],
  },
  dateOfBirth: {
    type: String,
    required: [false, "Please add a date of birth"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: [false, "Please choose a gender"],
  },
  contactNumber: {
    type: String,
    trim: true,
    required: [false, "Contact number is required"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [false, "Email address is required"],
    unique: false,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  uploadCitizenship: {
    type: String,
    trim: true,
    required: false,
  },

  uploadPassport: {
    type: String,
    trim: true,
    required: false,
  },
  
  interestedCountry: {
    type: String,
    enum: ["USA", "Canada", "UK", "Australia"],
    required: [false, "Please choose a country"],
  },

  interestedUniversity: {
    type: String,
    required: [false, "Please mention a university"],
  },

  chooseTheDegree: {
    type: String,
    enum: [
      "Diploma Level",
      "Bachelor Level",
      "PostGraduate Level",
      "Master Level",
    ],
    required: false,
  },
  chooseTheCourse: {
    type: String,
    required: false,
  },
  applyingFor: {
    type: String,
    enum: ["Dependent", "Independent"],
    required: [false, "Please choose an option"],
  },

  examBefore: {
    type: String,
    enum: ["Yes", "No"],
    required: [false, "Please select an option"],
  },
  Referal: {
    type: String,
    enum: ["None", "Social Media", "Friend"],
    required: false,
  },
  bookAvailableCounseller: {
    type: String,
  },
  Comments: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    default: "New",
  },
  academicDetails: [AcademicDetailsSchema],
  englishTest: [englishTestSchema],
  payment:[paymentSchema],
  addCounsellor:[counsellorSchema],
  task:[taskSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("LeadFormSchema", LeadForm);
