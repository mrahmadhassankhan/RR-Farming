const AsyncHandler = require("express-async-handler");
const trendingProductModel = require("../Models/TrendingProductModel");

const trendingProduct = AsyncHandler(async (req, res) => {
  const { title, newPrice, oldPrice, productImage } = req.body;
  try {
    const existingProduct = await trendingProductModel.findOne({ title });
    if (existingProduct) {
      return res.status(400).json("Product Already Exists");
    }

    await trendingProductModel.create({
      title,
      newPrice,
      oldPrice,
      productImage,
    });

    res.status(201).json("Successfully Added Trending Product");
  } catch (error) {
    console.error("Error adding trending product:", error);
    res.status(500).json("Error adding trending product");
  }
});

const getTredingProducts = AsyncHandler(async (req, res) => {
  const trendingProducts = await trendingProductModel.find();
  res.status(200).json(trendingProducts);
});

module.exports = { trendingProduct, getTredingProducts };
