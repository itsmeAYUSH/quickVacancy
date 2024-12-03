const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI; // Access environment variable directly
    // Log the URI for debugging - Remove or comment this out in production
    // console.log("MongoDB URI:", MONGO_URI); 

    // Connect to MongoDB
    await mongoose.connect(MONGO_URI,
       { useNewUrlParser: true, useUnifiedTopology: true }
      );

    // Event listeners for connection status
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected...");
    });
    
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
    
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected. Attempting to reconnect...");
    });
    
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process on failure
  }
};

// Call connectDB immediately to establish connection
connectDB();

module.exports = connectDB;
