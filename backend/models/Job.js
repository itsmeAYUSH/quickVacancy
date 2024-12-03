const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true }, // Added requirements field
  location: { type: String, required: true },
  employmentType: { type: String, required: true }, // Added employment type field
  salary: { type: String, required: true }, // Added salary field
  applicationDeadline: { type: Date, required: true }, // Added application deadline field
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Candidate" }], // Array of candidates who applied
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", JobSchema);
