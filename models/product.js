const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_quantity: { type: String, required: true },
  product_img: { type: String, required: true },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
