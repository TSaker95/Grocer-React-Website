const router = require("express").Router();
let Product = require("../models/product.model"); // Import use model

// @route GET /products
// @desc get all products
router.route("/").get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route POST /products/add
// @desc add new products
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  const newProduct = new Product({
    name,
    description
  });

  // save new product to mongo db database
  newProduct
    .save()
    .then(() => res.json("Product added."))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route GET /products/:id
// @desc get product by id
router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route

module.exports = router;
