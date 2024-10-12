const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  designation: { type: String },
  resumeUrl: { type: String },
});

module.exports = mongoose.model('Candidate', CandidateSchema);
