const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  categoryname: {
    type: String,
    required: true,
  },
  categoryimage: {
    type: String,
    required: true,
  }
});

const CategoryModel = mongoose.model(
  "Category",
  categorySchema
);

module.exports = CategoryModel;
