const mongoose = require("mongoose");
const countryPage = new mongoose.Schema({
  countryName: {
    type: String,
    required: [true, "Please select the country name"],
  },
  studentEnrolled: {
    type: Number,
    required: [true, "Please enter the number of student enrolled"],
  },
  universities: {
    type: Number,
    required: [true, "Please enter the number of universities"],
  },
  processing: {
    type: Number,
    required: [true, "Please enter the processing values"],
  },
  countryCode: {
    type: Number,
    required: false,
  },
  flag: {
    type: String,
    required: false,
  },
  continent: {
    type: String,
    required: [false, "Please enter the continent name"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deleted: { type: Boolean, default: false },
});
module.exports = mongoose.model("countryPageSchema", countryPage);
