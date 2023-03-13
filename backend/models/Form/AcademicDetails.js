const mongoose = require("mongoose");
const AcademicDetailsSchema = new mongoose.Schema({
    Education:{
        type:String,
        enum:["+2","Bachelor Level", "Master Level"],
        required:[true, "Please select an option"]
      },
    
      collegeName: {
        type: String,
        required: [true, "Please provide your College name"],
      },
      
      joinedYear:{
        type: Date,
        required: [true, "Please add joined year"],
      },
      
      passedYear: {
        type: Date,
        required: [true, "Please add year passed"],
      },
      createdAt:{
        type:Date,
        default:Date.now
      }
    })
  module.exports = AcademicDetailsSchema