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
        validator: function(date) {
          const now = new Date();
          const dateObj = new Date(date);
          now.setHours(0,0,0,0);
          dateObj.setHours(0,0,0,0);

          return dateObj.getTime() > now.getTime();
        },
        message: props => `must be greater than following date`
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
