const express = require('express');
const cors = require('cors'); // Importing cors
const connectDB = require('./config/db'); // Importing the db.js file
const authRoutes = require('./routes/authRoutes'); // Importing the auth routes
require('dotenv').config(); // Loading environment variables from .env file

const app = express();

// Connect to MongoDB
connectDB();

// Log MongoDB URI and JWT secret in development mode (optional)
if (process.env.NODE_ENV === 'development') {
  console.log("MONGO_URI:", process.env.MONGO_URI);
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
}

// Init Middleware for parsing JSON
app.use(express.json());

// CORS options to allow both localhost and Netlify
const allowedOrigins = ['http://localhost:3000', 'https://quickvacancy.netlify.app'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS policy: This origin is not allowed'), false);
    }
    return callback(null, true);
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow necessary methods
  credentials: true, // Allow credentials if needed
}));

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to Quick Vacancy API');
});

// Authentication Routes
app.use('/api/auth', authRoutes);

// Global error handler for catching unhandled errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Define the PORT and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
