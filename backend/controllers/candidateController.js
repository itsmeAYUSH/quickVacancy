const Candidate = require("../models/Candidate");
const Job = require("../models/Job");

exports.uploadResume = async (req, res) => {
  const file = req.file;
  const { fullName, email, phoneNumber, designation } = req.body;
  const { id } = req.user;

  if (!file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  try {
    // Check if the candidate exists
    let candidate = await Candidate.findById(id);

    if (!candidate) {
      // Create a new candidate
      candidate = new Candidate({
        _id: id,
        name: fullName,
        email,
        phoneNumber,
        designation,
        resume: {
          data: file.buffer,
          contentType: file.mimetype,
        },
      });
    } else {
      // Update the existing candidate
      candidate.name = fullName;
      candidate.email = email;
      candidate.phoneNumber = phoneNumber;
      candidate.designation = designation;
      candidate.resume = {
        data: file.buffer,
        contentType: file.mimetype,
      };
    }

    await candidate.save(); // Save the document

    res.json({ message: "Resume uploaded successfully", candidate });
  } catch (error) {
    console.error("Error during resume upload:", error); // Log the error
    res.status(500).json({ message: "Server error", error: error.message }); // Include error message in response
  }
};
// View available jobs
exports.viewJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Apply to a job (placeholder function)
exports.applyToJob = async (req, res) => {
  const { jobId } = req.params;
  const { id } = req.user; // Extract user ID from authenticated user

  // Logic to apply for the job (you need to implement this)
  // For now, just a placeholder response
  res.json({ message: `Applied to job with ID: ${jobId}`, candidateId: id });
};

// Get candidate profile data (placeholder function)
exports.getCandidateProfile = async (req, res) => {
  const { id } = req.user; // Extract user ID from authenticated user

  try {
    const candidate = await Candidate.findById(id);
    if (!candidate) {
      return res.status(404).json({ message: "Candidate not found" });
    }
    res.json(candidate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
