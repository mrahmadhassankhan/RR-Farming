const AsyncHandler = require("express-async-handler");
const CategoryModel = require("../../Models/AdminModel/CategoryModel");

const postcategory = AsyncHandler(async (req, res) => {
  const { categoryName,categoryImage } = req.body;
  try {
    const existingProduct = await CategoryModel.findOne({ categoryname });
    if (existingProduct) {
      return res.status(400).json("Product Already Exists");
    }

    await CategoryModel.create({
      categoryName,
      categoryImage
    });

    res.status(201).json("Successfully Added Trending Product");
  } catch (error) {
    console.error("Error adding trending product:", error);
    res.status(500).json("Error adding trending product");
  }
});

const getCategories = AsyncHandler(async (req, res) => {
  const categories = await CategoryModel.find();
  res.status(200).json(categories);
});

module.exports = { postcategory, getCategories };
