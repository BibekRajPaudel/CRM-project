const mongoose = require("mongoose");
const visaApplyPayment = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please select the first name"]
      },
      lastName: {
        type: String,
        required: [true, "Please select the second name"]
      },
        applyingCountry: {
          type: String,
          required: [true, "Please enter the applying country"],
        },
        course: {
          type: String,
          required: [true, "Please enter the course type"],
        },
        paymentFor:{
          type:String,
          required:false
        },
        totalAmount:{
            type:Number,
            required:false
        },
        paymentMethod:{
            type:String,
            required:false
        },
        createdAt:{
          type:Date,
          default:Date.now
        }
      
})
  module.exports = mongoose.model("visaApplyPaymentchema", visaApplyPayment);