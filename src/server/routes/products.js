const router = require("express").Router();
let Product = require("../models/product.model"); // Import use model

// @route GET api/products
// @desc get all products
router.route("/").get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route POST api/products/add
// @desc add new products
router.route("/").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;

  const newProduct = new Product({
    name,
    description,
    price
  });

  // save new product to mongo db database
  newProduct
    .save()
    .then(() => res.json("Product added."))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route GET api/products/:id
// @desc get product by id
router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route PUT api/products/:id
// @desc update product by id
router.put("/:id", (req, res) => {
  let productId = req.params.id;

  let product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  };

  Product.findByIdAndUpdate(productId, product, (err, product) => {
    if (err) throw err;

    res.send(`Updated product: ${product.name}`);
  });
});

// @route   DELETE api/products
// @desc    Delete an item
router.delete("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
