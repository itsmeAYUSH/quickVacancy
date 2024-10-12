const Company = require('../models/Company');
const Job = require('../models/Job');
const Candidate = require('../models/Candidate');

// Post a new job
exports.postJob = async (req, res) => {
  const { id } = req.user; // Extract company ID from authenticated user

  try {
    const company = await Company.findById(id);

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    const newJob = new Job({ ...req.body, postedBy: id });
    await newJob.save();

    res.json({ message: 'Job posted successfully', job: newJob });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// View applications for a job
exports.viewApplications = async (req, res) => {
  const { jobId } = req.params;

  try {
    const job = await Job.findById(jobId).populate('applications'); // Assuming 'applications' is an array of candidate IDs

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.json(job.applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
