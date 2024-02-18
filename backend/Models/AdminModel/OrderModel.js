const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
    productname: { type: String},
    description: { type: String },
    quantity: { type: String },
    price: { type: String }
});

const OrderModel = mongoose.model("Orders", orderSchema);

module.exports = OrderModel;
