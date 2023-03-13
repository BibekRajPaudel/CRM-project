const mongoose = require("mongoose");
const testPayment = new mongoose.Schema({
    testType: {
        type: String,
        enum:["TOEFL","IELTS","GRE","PTE"],
        required: [true, "Please select the test type"]
      },
      availableDate: {
        type: Date,
        required: [true, "Please enter the available date"]
      },
        totalAmount: {
          type: Number,
          required: [true, "Please enter the total amount"],
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
  module.exports = mongoose.model("testPaymentSchema", testPayment);