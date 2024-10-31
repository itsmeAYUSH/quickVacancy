const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;  // Access environment variable directly
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected...");
    });

    // Additional listeners
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected. Attempting to reconnect...");
    });

  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Optionally exit the process on failure in production
  }
};

module.exports = connectDB;
