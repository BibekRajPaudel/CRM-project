const mongoose = require("mongoose");
const countryForm = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the country name"],
  },
  continent: {
    type: String,
    required: [true, "Please enter the continent name"],
  },
  countryCode: {
    type: Number,
    required: [true, "Please enter the country code"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("countryFormSchema", countryForm);
