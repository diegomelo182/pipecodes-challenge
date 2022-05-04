const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true,
      validate: {
        validator: function(v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
    },
    observations: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Question', QuestionSchema);
