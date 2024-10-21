const dotenv = require("dotenv");
dotenv.config({ path: ".env" }); // Ensure this is at the top
const userroute = require("./routes/userroute.jsx");
const cors = require("cors");
const express = require("express");
const databaseconnection = require("./utils/database.jsx");
const app = express();
const cookieparse = require("cookie-parser");

// Middlewares
app.use(express.json());
app.use(cookieparse());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Corrected to your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Add methods if necessary
  credentials: true, // Include if you are sending cookies or using authentication
};
app.use(cors(corsOptions));

// Call database connection
databaseconnection();

// API routes
app.use("/api/v1/user", userroute);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
