const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
    },
    choices: [],
    rightChoice: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
