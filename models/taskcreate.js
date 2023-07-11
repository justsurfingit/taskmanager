const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must be provided"],
    trim: true,
    maxlength: [50],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("task", TaskSchema);
