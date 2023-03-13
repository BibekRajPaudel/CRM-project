const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: false,
  },
  chooseClass: {
    type: String,
    required: false,
  },
  selectTeacher: {
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
  startDate: {
    type: String,
    required: false,
  },
  classPeriod: {
    type: String,
    required: false,
  },
  endDate: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("classSchema", classSchema);
