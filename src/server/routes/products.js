const router = require('express').Router();
const Product = require('../models/product.model');
const checkAuth = require('../middleware/checkAuth');
const wrap = require('../helpers/wrap');
const sendError = require('../middleware/sendError');

// @route GET api/products
// @desc get all products
router.get('/', wrap(async (req, res) => {
  const products = await Product.find();
  res.json(products);
}));

// @route GET api/products/:id
// @desc get product by id
router.get('/:id', wrap(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
}));

// Using the checkAuth middleware here means only routes below require authentication.
router.use(checkAuth);

// @route POST api/products/add
// @desc add a new product
router.post('/', wrap(async (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = new Product({ name, description, price });

  await newProduct.save();
  res.json(newProduct);
}));

// @route PUT api/products/:id
// @desc update product by id
router.put('/:id', wrap(async (req, res) => {
  const productId = req.params.id;
  const prevProduct = await Product.findOne({ _id: productId });

  const newDetails = {
    name: req.body.name || prevProduct.name,
    description: req.body.description || prevProduct.description,
    price: req.body.price || prevProduct.price,
  };

  await Product.findByIdAndUpdate(productId, newDetails);
  const updatedProduct = await Product.findOne({ _id: productId });
  res.json(updatedProduct);
}));

// @route   DELETE api/products
// @desc    Delete an item
router.delete('/:id', wrap(async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({ success: true });
}));

router.use(sendError);

module.exports = router;
