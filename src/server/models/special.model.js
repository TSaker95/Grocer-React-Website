const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const specialSchema = new Schema({
  productId: { type: String, required: true, unique: true },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false }
});

const Special = mongoose.model("Special", specialSchema);

module.exports = Special;
