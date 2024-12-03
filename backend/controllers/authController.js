const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Function to create a JWT token
const createToken = (userId) => {
  const payload = {
    user: {
      id: userId,
    },
  };

  return jwt.sign(
    payload,
    process.env.JWT_SECRET, // Ensure you have JWT_SECRET in your environment variables
    { expiresIn: "1h" } // Set a reasonable expiration time
  );
};

// Signup User
exports.signupUser = async (req, res) => {
  const { name, companyName, email, phone, designation, lookingTo, password } =
    req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User  already exists" });
    }

    // Create a new user
    user = new User({
      name,
      email,
      phone,
      designation,
      companyName, // Assuming you will add companyName to your User model
      lookingTo, // Assuming you will add lookingTo to your User model
      password, // Store password for hashing
    });

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt); // Hashing the password

    await user.save();

    // Return JWT for authentication
    const token = createToken(user.id);
    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Return JWT for authentication
    const token = createToken(user.id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
