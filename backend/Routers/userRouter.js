const express = require("express");
const { Login, Register } = require("../Controllers/userController");
const router = express.Router();

router.use("/login", Login);
router.use("/register", Register);

module.exports = router;
