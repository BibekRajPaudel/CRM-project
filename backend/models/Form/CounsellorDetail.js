const mongoose = require("mongoose");
const counsellorDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "Please enter the country name"],
  },
  contact: {
    type: String,
    required: [false, "Please enter the cpntact number"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [false, "Email address is required"],
    unique: false,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = counsellorDetailSchema;