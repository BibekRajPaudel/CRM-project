const mongoose = require("mongoose");
const englishTestSchema = new mongoose.Schema({
  givenExamDate: {
    type: String,
    required: [false, "Please enter the required date"],
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
    max: 1000,
    required: false
  },
  testType: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = englishTestSchema;
