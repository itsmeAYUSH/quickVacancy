const Candidate = require('../models/Candidate');
const Job = require('../models/Job');

// Upload resume (file upload would be handled by Multer in fileUpload.js)
exports.uploadResume = async (req, res) => {
  const { id } = req.user; // Extract user ID from authenticated user

  try {
    const candidate = await Candidate.findById(id);

    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    candidate.resumeUrl = req.file.path; // file.path comes from multer
    await candidate.save();

    res.json({ message: 'Resume uploaded successfully', candidate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// View available jobs
exports.viewJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
