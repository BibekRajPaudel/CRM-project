const mongoose = require("mongoose");
const program = new mongoose.Schema({
  courseName: {
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
  }
  
});
module.exports = program
