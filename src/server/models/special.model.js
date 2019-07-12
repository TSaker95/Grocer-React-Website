const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const specialSchema = new Schema({
  product: { type: Object, required: true },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
  salePrice: { type: Number, required: true }
});

const Special = mongoose.model("Special", specialSchema);

module.exports = Special;
