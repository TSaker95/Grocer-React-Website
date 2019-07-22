const router = require('express').Router();
const Special = require('../models/special.model');
const checkAuth = require('../middleware/check-auth');
const wrap = require('../helpers/wrap');
const sendError = require('../middleware/sendError');

// @route GET api/specials
// @desc get all specials
router.get('/', wrap(async (req, res) => {
  const specials = await Special.find();
  res.json(specials);
}));

// @route GET api/specials/:id
// @desc get special by id
router.get('/:id', wrap(async (req, res) => {
  const special = await Special.findById(req.params.id);
  res.json(special);
}));

// Using the checkAuth middleware here means only routes below require authentication.
router.use(checkAuth);

// @route POST api/specials/add
// @desc add a new special
router.post('/', wrap(async (req, res) => {
  const {
    productID, startDate, endDate, salePrice,
  } = req.body;

  const newSpecial = new Special({
    productID, startDate, endDate, salePrice,
  });

  // save new special to mongo db database
  await newSpecial.save();
  res.json(newSpecial);
}));

// @route PUT api/specials/:id
// @desc update special by id
router.put('/:id', wrap(async (req, res) => {
  const specialId = req.params.id;
  const prevSpecial = await Special.findOne({ _id: specialId });

  const newDetails = {
    productId: req.body.productId || prevSpecial.productId,
    startDate: req.body.startDate || prevSpecial.startDate,
    endDate: req.body.endDate || prevSpecial.endDate,
    salePrice: req.body.salePrice || prevSpecial.salePrice,
  };

  await Special.findByIdAndUpdate(specialId, newDetails);
  const updatedSpecial = await Special.findOne({ _id: specialId });
  res.json(updatedSpecial);
}));

// @route   DELETE api/specials
// @desc    Delete an item
router.delete('/:id', wrap(async (req, res) => {
  await Special.findByIdAndRemove(req.params.id);
  res.json({ success: true });
}));

router.use(sendError);

module.exports = router;
