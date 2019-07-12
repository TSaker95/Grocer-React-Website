const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, unique: true, trim: true },
  price: { type: Number, required: false }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
