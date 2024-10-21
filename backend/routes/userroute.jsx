const express = require("express");
const router = express.Router();
const { login, register, logout } = require("../controllers/usert.jsx");
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
module.exports = router;
