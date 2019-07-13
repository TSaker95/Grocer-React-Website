const router = require('express').Router();
const Product = require('../models/product.model');
const checkAuth = require('../middleware/check-auth');

// @route GET api/products
// @desc get all products
router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route GET api/products/:id
// @desc get product by id
router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// Using the checkAuth middleware here means only routes below require authentication.
router.use(checkAuth);

// @route POST api/products/add
// @desc add new products
router.route('/').post((req, res) => {
  const { name, description } = req.body;

  const newProduct = new Product({
    name,
    description,
  });

  // save new product to mongo db database
  newProduct
    .save()
    .then(() => res.json('Product added.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route   DELETE api/products
// @desc    Delete an item
router.delete('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false, error: err }));
});

module.exports = router;
