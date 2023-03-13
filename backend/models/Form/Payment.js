const mongoose = require("mongoose");
const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "Please select the payment name"],
  },
  bank: {
    type: String,
    required: [true, "Please enter the bank name"],
  },
  paymentFor: {
    type: String,
    required: false,
  },
  totalAmount: {
    type: Number,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  receipt: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = paymentSchema;