const mongoose = require("mongoose");
const test = new mongoose.Schema({
  name:{
    type: String,
    required: false,
  },
  chooseTest: {
    type: String,
    required: false,
  },
  chooseTestDate: {
    type: String,
    required: false,
  },
  startTime: {
    type: String,
    required: false,
  },
  endTime: {
    type: String,
    required: false,
  },
  chooseResultDate: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
module.exports = mongoose.model("testSchema", test);
