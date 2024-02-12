const express = require("express");
const { Login, Register } = require("../Controllers/userController");
const { trendingProduct } = require("../Controllers/trendingProductController");

const router = express.Router();

router.route("/login").post(Login);
router.route("/register").post(Register);
router.route("/trendingproduct").post(trendingProduct);
module.exports = router;
