const express = require('express');
const cors = require('cors'); // Make sure you import cors
const connectDB = require('./config/db'); // The db.js file
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to database
connectDB();

console.log("MONGO_URI:", process.env.MONGO_URI); // Check MongoDB URI
console.log("JWT_SECRET:", process.env.JWT_SECRET); // Check JWT secret

// Init Middleware
app.use(express.json());

// Enable CORS with options (optional)
app.use(cors({
  origin: 'http://localhost:3000', // Allow your frontend origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow the necessary methods
  credentials: true, // Allow credentials (if needed)
}));

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:5000`));
