const mongoose = require("mongoose");

const { Schema } = mongoose;

const specialSchema = new Schema({
  productId: { type: String, required: true },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  salePrice: { type: Number, required: false }
});

const Special = mongoose.model("Special", specialSchema);

module.exports = Special;
