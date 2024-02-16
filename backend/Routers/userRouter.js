const express = require("express");
const { Login, Register } = require("../Controllers/userController");

const {postcategory,getCategories} =require('../Controllers/Admin/CategoryController')
const {postproduct ,getproduct} = require('../Controllers/Admin/ProductController')

const router = express.Router();

router.route("/login").post(Login);
router.route("/register").post(Register);



//admin routes
router.route("/postcategory").post(postcategory);
router.route("/getcategory").get(getCategories);

router.route("/postproduct").post(postproduct);
router.route("/getproduct").get(getproduct);

module.exports = router;
