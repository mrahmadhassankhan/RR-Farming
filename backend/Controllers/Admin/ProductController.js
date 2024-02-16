const AsyncHandler = require("express-async-handler");
const ProductModel = require("../../Models/AdminModel/ProductModel");

const postproduct = AsyncHandler(async (req, res) => {
    const { categoryName,productName,newPrice, oldPrice,quantity,productImage } = req.body;
    try {
        const existingProduct = await ProductModel.findOne({ productName });
        if (existingProduct) {

            return res.status(400).json("Product Already Exists");
        }

        await ProductModel.create({
            categoryName,productName,newPrice, oldPrice,quantity,productImage
        });

        res.status(201).json("Successfully Added Product");
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json("Error adding product");
    }
});

const getproduct = AsyncHandler(async (req, res) => {
    const products = await ProductModel.find();
    res.status(200).json(products);
});

module.exports = { postproduct, getproduct };
