const user = require("../models/usermodel.jsx"); // Make sure the path is correct
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        msg: "Invalid data",
        success: false,
      });
    }

    // Use foundUser to store the result of the database query
    const foundUser = await user.findOne({ email });
    if (!foundUser || !foundUser.password) {
      return res.status(401).json({
        msg: "Invalid email or password",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(401).json({
        msg: "Invalid email or password",
        success: false,
      });
    }

    // Create a token with an object payload
    const token = jwt.sign({ id: foundUser._id }, "cgvdcdhjvdhj", {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        msg: `Welcome back,${foundUser.fullname}`,
        success: true,
        user: {
          id: foundUser._id,
          fullname: foundUser.fullname,
          email: foundUser.email,
          password: foundUser.password,
          // Add more fields if needed
          // e.g., phone: foundUser.phone, address: foundUser.address
          createdAt: foundUser.createdAt,
          updatedAt: foundUser.updatedAt,
        },
      });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: "Server error",
      success: false,
    });
  }
};
const logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      msg: "log out successful",
      success: true,
    });
};
const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check for missing data
    if (!fullname || !email || !password) {
      return res.status(400).json({
        msg: "Invalid data",
        success: false,
      });
    }

    // Check if the email already exists
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        msg: "This email is already used",
        success: false,
      });
    }

    // Hash the password (use 10 or 12 rounds)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await user.create({
      fullname,
      email,
      password: hashedPassword, // Save hashed password
    });

    return res.status(201).json({
      msg: "Account created successfully",
      success: true,
      user: newUser, // Optionally return the new user details
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: "Server error",
      success: false,
    });
  }
};

module.exports = {
  login,
  logout,
  register,
};
