const mongoose = require("mongoose");

const courses = mongoose.Schema({
  courseName: {
    type: String,
    required: false,
  },
  universityName: {
    type: String,
    required: false,
  },
  program: {
    type: String,
    required: false,
  },
  level: {
    type: String,
    required: false,
  },
  tutionFeeFirst: {
    type: String,
    required: false,
  },
  tutionFeeSecond: {
    type: String,
    required: false,
  },
  tutionFeeThird: {
    type: String,
    required: false,
  },

  selectIntakes: {
    type: String,
    required: false,
  },
  coursePeriod: {
    type: String,
    required: false,
  },
  courseDescription: {
    type: String,
    required: false,
  },
  summary: {
    type: String,
    required: false,
  },

  //Course Information
  duration: {
    type: String,
    required: false,
  },
  //Fees and expenses
  livingAndAccomendation: {
    type: String,
    required: false,
  },

  //Entry Requirements
  qualificationLevel: {
    type: String,
    required: false,
  },
  ielts: {
    type: String,
    required: false,
  },
  conditionalOffer: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model("coursesSchema", courses);
