const express = require('express');
const router = express.Router();
const { postJob, viewApplications } = require('../controllers/companyController');
const authMiddleware = require('../middleware/authMiddleware');

// Post a new job
router.post('/postJob', authMiddleware, postJob);

// View applications for a specific job
router.get('/job/:jobId/applications', authMiddleware, viewApplications);

module.exports = router;
