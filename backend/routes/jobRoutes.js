const express = require("express");
const Job = require("../models/Job");
const router = express.Router();

// POST a new job
router.post("/", async (req, res) => {
  const {
    title,
    description,
    requirements,
    location,
    employmentType,
    salary,
    applicationDeadline,
  } = req.body;

  try {
    const newJob = new Job({
      title,
      description,
      requirements,
      location,
      employmentType,
      salary,
      applicationDeadline,
    });

    await newJob.save();
    res.status(201).json({ message: "Job posted successfully", job: newJob });
  } catch (error) {
    res.status(500).json({ message: "Error posting job", error });
  }
});

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs from the database
    res.json({ jobs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
});

module.exports = router;
