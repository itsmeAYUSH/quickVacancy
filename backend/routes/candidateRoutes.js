const express = require("express");
const router = express.Router();
const {
  uploadResume,
  viewJobs,
  applyToJob,
  getCandidateProfile,
} = require("../controllers/candidateController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../utils/fileUpload"); // Import the multer middleware

// Route to upload resume
router.post("/uploadResume", authMiddleware, upload, uploadResume);

// Route to view available jobs
router.get("/jobs", authMiddleware, viewJobs);

// Route to apply for a job
router.post("/apply/:jobId", authMiddleware, applyToJob);

// Route to get candidate profile data
router.get("/profile", authMiddleware, getCandidateProfile);

module.exports = router;
