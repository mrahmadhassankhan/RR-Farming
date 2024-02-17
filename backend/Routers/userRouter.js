const express = require("express");
const { Login, Register } = require("../Controllers/userController");

const {postCategory,getCategories,deleteCategory} =require('../Controllers/Admin/CategoryController')
const { postproduct, getproduct, deleteproduct } = require('../Controllers/Admin/ProductController')
const { postcontactus, getcontactus, deletecontactus } = require('../Controllers/Admin/ContactUsController')

const router = express.Router();

router.route("/login").post(Login);
router.route("/register").post(Register);



//admin routes
router.route("/postcategory").post(postCategory);
router.route("/getcategory").get(getCategories);
router.route("/deletecategory/:categoryId").delete(deleteCategory);

router.route("/postproduct").post(postproduct);
router.route("/getproduct").get(getproduct);
router.route("/deleteproduct/:productId").delete(deleteproduct);

router.route("/postcontactus").post(postcontactus);
router.route("/getcontactus").get(getcontactus);
router.route("/deletecontactus/:queryId").delete(deletecontactus);


module.exports = router;
