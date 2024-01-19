const express = require("express");
const { Login, Register } = require("../Controllers/userController");

const router = express.Router();

router.route("/login").post(Login); // Define the route using Post method
router.route("/register").post(Register);

module.exports = router;
