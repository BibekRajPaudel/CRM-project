const mongoose = require("mongoose");
const AcademicDetailsSchema = new mongoose.Schema({
    Education:{
        type:String,
        enum:["+2","Bachelor Level", "Master Level"],
        required:[false, "Please select an option"]
      },
    
      collegeName: {
        type: String,
        required: [false, "Please provide your College name"],
      },
      
      joinedYear:{
        type: String,
        required: [false, "Please add joined year"],
      },
      
      passedYear: {
        type: String,
        required: [false, "Please add year passed"],
      },
      uploadMarkSheet: {
        type: String,
        required: false
      },
      createdAt:{
        type:Date,
        default:Date.now
      }
    })
  module.exports = AcademicDetailsSchema