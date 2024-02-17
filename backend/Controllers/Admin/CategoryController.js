const AsyncHandler = require("express-async-handler");
const CategoryModel = require("../../Models/AdminModel/CategoryModel");
const mongoose = require('mongoose');

const postCategory = AsyncHandler(async (req, res) => {
  const { categoryName, categoryImage } = req.body;
  try {
    const existingCategory = await CategoryModel.findOne({ categoryName });
    if (existingCategory) {
      return res.status(400).json("Category Already Exists");
    }

    await CategoryModel.create({
      categoryName,
      categoryImage
    });

    res.status(201).json("Successfully Added Category Product");
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json("Error adding category");
  }
});



const getCategories = AsyncHandler(async (req, res) => {
  const categories = await CategoryModel.find();
  res.status(200).json(categories);
});



const deleteCategory = AsyncHandler(async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const deletedCategory = await CategoryModel.findOneAndDelete(({ _id: categoryId }));
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Respond with a success message
    console.log('Category deleted successfully');
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = { postCategory, getCategories, deleteCategory };
