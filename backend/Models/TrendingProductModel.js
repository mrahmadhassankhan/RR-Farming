const mongoose = require("mongoose");
const tredingProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  newPrice: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: String,
  },
  productImage: {
    type: String,
    required: true,
  },
});

const trendingProductModel = mongoose.model(
  "TrendingProduct",
  tredingProductSchema
);

module.exports = trendingProductModel;
