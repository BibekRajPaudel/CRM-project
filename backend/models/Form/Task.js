const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: [true, "Please add the due date"],
  },
  progress: {
    type: String,
    enum: ["Completed", "Remaining"],
    default: "Remaining",
    required: false,
  },
});
module.exports = taskSchema;
