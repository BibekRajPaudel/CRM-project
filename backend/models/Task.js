const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  task1: {
    type: String,
    required: true,
  },
  task2: {
    type: String,
    required: false,
  },
  task3: {
    type: String,
    required: false,
  },
  task4: {
    type: String,
    required: false,
  }, 
  task5: {
    type: String,
    required: false,
  },
  dueDate:{
    type: Date,
    required: [true, "Please add the due date"],
  }
});
module.exports = mongoose.model("taskSchema", taskSchema);