const mongoose = require("mongoose");

const postedJobSchema = new mongoose.Schema(
  {
    employerId: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    payment: {
      type: Number,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    urgency: {
      type: String,
      required: true,
    },

    jobType: {
      type: String,
      required: true,
    },

    workersNeeded: {
      type: Number,
      required: true,
    },

    skills: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Active",
    },
  },

  { timestamps: true }
);

const postedJobModel = mongoose.model(
  "postedjobs",
  postedJobSchema
);

module.exports = postedJobModel;