const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const checkAuth = require("./middleware/check-auth")

require("dotenv").config();

// Create express server and set port
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(cookieParser(process.env.JWT_SECRET))
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

// Connect to database
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Successfully connected to MongoDB");
});

// Route definitions
app.use(express.static("dist"));

const productsRouter = require("./routes/products");
app.use("/api/products", checkAuth, productsRouter);
const specialsRouter = require("./routes/specials");
app.use("/api/specials", checkAuth, specialsRouter);
const usersRouter = require("./routes/users");
app.use("/api/users", usersRouter);

app.get("/api/checkAuth", checkAuth, (req, res) => res.sendStatus(200));

// Dummy route for databaseless testing
app.get("/api/getMessage", (req, res) => res.send({ message: "Dummy thicc" }));

// If no route matches, send the react app and let it deal with the request using react-router
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
