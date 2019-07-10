const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

require("dotenv").config();

// Create express server and set port
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// Connect to database
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Successfully connected to MongoDB");
});

// Route definitions
const productsRouter = require("./routes/products");
app.use("/api/products", productsRouter);
const specialsRouter = require("./routes/specials");
app.use("/api/specials", specialsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
