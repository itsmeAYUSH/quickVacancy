const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  companyName: {
    type: String, 
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  designation: {
    type: String,
  },
  lookingTo: {
    type: String, 
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model already exists in mongoose.models before defining it
module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
