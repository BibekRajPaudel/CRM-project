const mongoose = require("mongoose");
const englishTestSchema = new mongoose.Schema({
  givenExamDate: {
    type: String,
    required: [true, "Please enter the required date"],
  },
  Reading: {
    type: Number,
    min: 0,
    max: 10,
  },
  Writing: {
    type: Number,
    min: 0,
    max: 10,
  },
  Speaking: {
    type: Number,
    min: 0,
    max: 10,
  },
  Listening: {
    type: Number,
    min: 0,
    max: 10,
  },
  overallScore: {
    type: Number,
    min: 0,
    max: 1000,
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
