const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();

router.post("/login", userController.Login);
router.post("/register", userController.Register);
