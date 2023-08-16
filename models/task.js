//setting up mongoose
const mongoose = require("mongoose");

//setting up schema
const taskSchema = {
  description: { type: String, required: true },
  category: { type: String, required: true },
  datevalue: { type: String, required: true },
};

//exporting the task model
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
