const jwt = require('jsonwebtoken');

// Use this in your token generation
const JWT_SECRET = "mySuperSecretJWTKey123!@#$"; // your hardcoded key here

// Function to generate a JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
};
