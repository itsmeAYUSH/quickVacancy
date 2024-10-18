const Candidate = require("../models/Candidate");
const Job = require("../models/Job");

// Upload resume (handled by Multer in fileUpload.js)
exports.uploadResume = async (req, res) => {
  const { id } = req.user; // Extract user ID from the authenticated user

  try {
    const candidate = await Candidate.findById(id);

    if (!candidate) {
      console.error("Candidate not found for ID:", id);
      return res.status(404).json({ message: "Candidate not found" });
    }

    // Check if the file was uploaded
    if (!req.file) {
      console.error("No file uploaded");
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Update candidate's resume URL with the file path
    candidate.resumeUrl = `/uploads/resumes/${req.file.filename}`; // Use the file path relative to the uploads folder
    await candidate.save();

    console.log("Resume uploaded successfully for candidate:", candidate.email);
    return res.status(200).json({
      message: "Resume uploaded successfully",
      resumeUrl: candidate.resumeUrl,
    });
  } catch (error) {
    console.error("Error uploading resume:", error);
    return res.status(500).json({ message: "Server error while uploading resume" });
  }
};

// View available jobs
exports.viewJobs = async (req, res) => {
  try {
    const jobs = await Job.find({}); // Retrieve all jobs from the Job collection
    return res.status(200).json(jobs); // Send the list of jobs as a JSON response
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return res.status(500).json({ message: "Server error while fetching jobs" });
  }
};

// Apply for a job
exports.applyToJob = async (req, res) => {
  const { id } = req.user; // Extract user ID from the authenticated user
  const { jobId } = req.params; // Get job ID from request parameters

  try {
    const candidate = await Candidate.findById(id);
    const job = await Job.findById(jobId);

    if (!candidate) {
      console.error("Candidate not found for ID:", id);
      return res.status(404).json({ message: "Candidate not found" });
    }

    if (!job) {
      console.error("Job not found for ID:", jobId);
      return res.status(404).json({ message: "Job not found" });
    }

    // Implement your logic for applying to the job
    // Example: Create an application record in another collection
    // const application = new Application({ candidate: candidate._id, job: job._id });
    // await application.save();

    return res.status(200).json({
      message: "Application submitted successfully",
      jobTitle: job.title,
    });
  } catch (error) {
    console.error("Error applying for job:", error);
    return res.status(500).json({ message: "Server error while applying for job" });
  }
};

// Get candidate profile data
exports.getCandidateProfile = async (req, res) => {
  const { id } = req.user; // Extract user ID from the authenticated user

  try {
    const candidate = await Candidate.findById(id);

    if (!candidate) {
      console.error("Candidate not found for ID:", id);
      return res.status(404).json({ message: "Candidate not found" });
    }

    return res.status(200).json(candidate); // Return candidate profile data
  } catch (error) {
    console.error("Error fetching candidate profile:", error);
    return res.status(500).json({ message: "Server error while fetching candidate profile" });
  }
};