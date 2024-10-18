const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  designation: { type: String },
  resumeUrl: { type: String }, // Store the resume file path here
  uploadedAt: { type: Date, default: Date.now }, // Track when the resume was uploaded
});

module.exports = mongoose.model("Candidate", CandidateSchema);
