const mongoose = require("mongoose");
const { Schema } = mongoose;

const thoughtSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdData: {
    type: String,
    trim: true
  },
  key: {
    type: String,
    trim: true
  },
  author: {
    type: String,
    trim: true
  },
  likes: {
    type: Number,
    trim: true
  }
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = { Thought };