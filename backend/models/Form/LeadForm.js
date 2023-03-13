const mongoose = require("mongoose");
const AcademicDetailsSchema = require("../Form/AcademicDetails")
const ieltsSchema = require("../Form/Ielts")
const greSchema = require("../Form/Gre")
const pteSchema = require("../Form/PTE")
const tofelSchema = require("../Form/Tofel")

const LeadForm = new mongoose.Schema({
  firstName: {
    type: String,
    trim:true,
    required:true
  },
  middleName: {
    type: String,
    required:false
  },
  lastName: {
    type: String,
    required: [true, "Please provide your last name"],
  },
  temporaryAddress: {
    type: String,
    required: [true, "Please provide your temporary Address"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Please provide your permanent Address"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "Please add a date of birth"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: [true, "Please choose a gender"],
  },
  contactNumber: {
    type: String,
    trim: true,
    required: [true, "Contact number is required"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "Email address is required"],
    unique: false,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  uploadCitizenship:{
    type:String,
    trim:true,
    required:false
  },

  uploadPassport:{
    type:String,
    trim:true,
    required:false
  },
  uploadMarkSheet:{
    type:String,
    trim:true,
    required:false
  },
  interestedCountry:{
    type: String,
    enum: ["USA", "Canada", "UK", "Australia"],
    required: [true, "Please choose a country"],
  },

  interestedUniversity:{
    type: String,
    required: [true, "Please mention a university"],
  },

  chooseTheDegree:{
    type:String,
    enum: ["Diploma Level", "Bachelor Level", "PostGraduate Level", "Master Level"],
    required:false
  },
  chooseTheCourse:{
    type:String,
    required:false
  },
  applyingFor:{
    type: String,
    enum: ["Dependent", "Independent"],
    required: [true, "Please choose an option"],
  },

  examBefore:{
    type:String,
    enum:["Yes","No"],
    required:[true, "Please select an option"]
  },
  Referal:{
    type:String,
    enum:["None","Social Media", "Friend"],
    required:true
  },
  bookAvailableCounseller:{
    type:String
  },
  Comments:{
    type:String,
    required:true
  },
  status:{
    type:String,
    default:"New"
  },
  academicDetails:[
    {
      Education:{
    type:String,
    enum:["+2","Bachelor Level", "Master Level"],
    required:[true, "Please select an option"]
  },

  collegeName: {
    type: String,
    required: [true, "Please provide your College name"],
  },
  
  joinedYear:{
    type: Date,
    required: [true, "Please add joined year"],
  },
  
  passedYear: {
    type: Date,
    required: [true, "Please add year passed"],
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
}],
  englishTest:[{
    givenExamDate: {
      type: Date,
      required: false,
    },
    Reading: {
      type: Number,
      min: 0,
      max: 10,
      required: false
    },
    Writing: {
      type: Number,
      min: 0,
      max: 10,
      required: false
    },
    Speaking: {
      type: Number,
      min: 0,
      max: 10,
      required: false
    },
    Listening: {
      type: Number,
      min: 0,
      max: 10,
      required: false
    },
    overallScore: {
      type: Number,
      min: 0,
      max: 10,
      required: false
    },
    createdAt:{
      type:Date,
      default:Date.now
    }}
  ],
  createdAt:{
    type:Date,
    default:Date.now
  }
  

});

module.exports = mongoose.model("LeadFormSchema", LeadForm);
