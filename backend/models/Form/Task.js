const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: false,
  },
  dueDate: {
    type: String,
    required: [false, "Please add the due date"],
  },
  progress: {
    type: String,
    enum: ["Completed", "Remaining"],
    default: "Remaining",
    required: false,
  },
});
module.exports = taskSchema;
