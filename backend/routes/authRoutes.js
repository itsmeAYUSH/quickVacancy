const express = require('express');
const { signupUser , loginUser  } = require('../controllers/authController'); // Import controller functions
const router = express.Router();

// Register User Route
router.post('/signup', signupUser );

// Login User Route
router.post('/login', loginUser );

module.exports = router;