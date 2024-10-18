const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI; 
    console.log(`MongoDB URI: ${MONGO_URI}`);

    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);  // Exit process with failure
  }
};

// Connection listeners for error and disconnect events
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected. Attempting to reconnect...");
});

// Check if the model has already been defined to prevent overwriting
const User = mongoose.models.User || mongoose.model("User", new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
}, { timestamps: true }));

// Export the connectDB function and User model
module.exports = {
  connectDB,
  User,
};
