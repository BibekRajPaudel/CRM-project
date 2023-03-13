const mongoose = require("mongoose");

const addUniversity = new mongoose.Schema({
  universityName: {
    type: String,
    required: true,
  },

  streetNo: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },

  universityType: {
    type: String,
    required: true,
  },
  established: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
  },

  enrolledDate: {
    type: String,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "Email address is required"],
    unique: false,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  universityLink: {
    type: String,
    required: true,
  },
  programOffered: {
    type: String,
    enum: ["Bachelor", "Masters", "Diploma"],
    required: [true, "Please choose a value"],
  },
  livingAndAccomendation: {
    type: String,
    required: true,
  },
  askAnyQuestions: {
    type: String,
    required: true,
  },
  descriptionAboutUniversity: {
    type: String,
    required: true,
  },
  courseName:{
    type:String,
    required:false
},
program:{
    type:String,
    required:false
},
level:{
    type:String,
    required:false
},
tutionFeeFirst:{
    type:String,
    required:false
},
tutionFeeSecond:{
    type:String,
    required:false
},
tutionFeeThird:{
    type:String,
    required:false
},

selectIntakes:{
    type:String,
    required:false
},
coursePeriod:{
    type:String,
    required:false
},
courseDescription:{
    type:String,
    required:false
},

  createdAt: {
    type: Date,
    default: Date.now,
  },
  deleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("addUniversitySchema", addUniversity);
