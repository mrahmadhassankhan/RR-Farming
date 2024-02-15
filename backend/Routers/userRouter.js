const express = require("express");
const { Login, Register } = require("../Controllers/userController");
const {
  trendingProduct,
  getTredingProducts,
} = require("../Controllers/trendingProductController");

const {postcategory,getCategories} =require('../Controllers/Admin/CategoryController')

const router = express.Router();

router.route("/login").post(Login);
router.route("/register").post(Register);
router.route("/trendingproduct").post(trendingProduct);
router.route("/gettrendingproducts").get(getTredingProducts);




//admin routes
router.route("/postcategory").post(postcategory);
router.route("/getcategory").get(getCategories);


module.exports = router;
