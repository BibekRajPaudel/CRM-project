const mongoose = require("mongoose");
const greSchema = new mongoose.Schema({
  givenExamDate: {
    type: Date,
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
    max: 10,
  },
});
module.exports = greSchema;
