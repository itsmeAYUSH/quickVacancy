const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  phoneNumber: { type: String },
  designation: { type: String },
  resume: {
    data: Buffer, // Stores the binary data of the PDF
    contentType: String, // MIME type (e.g., application/pdf)
  },
});

module.exports = mongoose.model("Candidate", CandidateSchema);
