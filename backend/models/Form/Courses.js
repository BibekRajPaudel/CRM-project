const mongoose = require("mongoose")

const courses = mongoose.Schema({
    courseName:{
        type:String,
        required:true
    },
    universityName:{
        type:String,
        required:true
    },
    program:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
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
    }
})
module.exports = mongoose.model("coursesSchema", courses);