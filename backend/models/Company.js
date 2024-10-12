const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  totalJobsPosted: { type: Number, default: 0 },
  applicationsReceived: { type: Number, default: 0 },
});

module.exports = mongoose.model('Company', CompanySchema);
