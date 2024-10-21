const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true, // Corrected here
    },
    email: {
      type: String,
      required: true, // Corrected here
    },
    password: {
      type: String,
      required: true, // Corrected here
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userschema); // Note: It's common to capitalize the model name
module.exports = user;
