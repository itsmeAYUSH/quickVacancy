// In your db.js file
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const MONGO_URI =
      "mongodb+srv://ayushksagar14:r4iJRk9ZFj2UhhMj@quickvacancycluster.p1j4q.mongodb.net/?retryWrites=true&w=majority&appName=quickVacancyCluster";
    // const JWT_SECRET = 'mysecretkey';
    const JWT_SECRET = "mySuperSecretJWTKey123!@#$";
    // Replace with your JWT secret

    process.env.MONGO_URI = MONGO_URI;
    process.env.JWT_SECRET = JWT_SECRET;

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected...");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = connectDB;
