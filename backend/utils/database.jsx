const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "../.env", // Ensure the path is correct
});

console.log("MongoDB URI:", process.env.MONGODB_URI);

const databaseconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (e) {
    console.error("MongoDB connection error:", e);
  }
};

module.exports = databaseconnection;
