const mongoose = require("mongoose");
const employee = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  temporaryAddress: {
    type: String,
    required: false,
  },
  permanentAddress: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: [false, "Please choose a gender"],
  },
  dateOfBirth: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  contactNumber: {
    type: String,
    trim: true,
    required: [false, "Contact number is required"],
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
  image:{
    type:String,
    required:false
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("employeeSchema", employee);
