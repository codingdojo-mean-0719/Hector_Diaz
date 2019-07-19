const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const TaskSchema = Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timeStamp: true }
);
module.exports = mongoose.model('Task', TaskSchema);
