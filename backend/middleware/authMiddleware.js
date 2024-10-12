const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Extract token from the Authorization header
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the decoded user information to the request object
    req.user = decoded.user;
    next(); // Call the next middleware or route handler
  } catch (error) {
    console.error('Token verification error:', error); // Log any verification errors
    res.status(401).json({ message: 'Token is not valid' });
  }
};
