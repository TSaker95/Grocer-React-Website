const router = require('express').Router();
const Special = require('../models/special.model');
const checkAuth = require('../middleware/check-auth');

// @route GET api/specials
// @desc get all specials
router.route('/').get((req, res) => {
  Special.find()
    .then(specials => res.json(specials))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route GET api/specials/:id
// @desc get special by id
router.route('/:id').get((req, res) => {
  Special.findById(req.params.id)
    .then(special => res.json(special))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// Using the checkAuth middleware here means only routes below require authentication.
router.use(checkAuth);

// @route POST api/specials/add
// @desc add new specials
router.route('/').post((req, res) => {
  const { productId, startDate, endDate } = req.body;

  const newSpecial = new Special({
    productId,
    startDate,
    endDate,
  });

  // save new special to mongo db database
  newSpecial
    .save()
    .then(() => res.json('Special added.'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route PUT api/specials/:id
// @desc update special by id
router.put("/:id", (req, res) => {
  let specialId = req.params.id;
  let previousSpecial = Special.find({ _id: specialId });

  let special = {
    productId: req.body.productId || previousSpecial.productId,
    startDate: req.body.startDate || previousSpecial.startDate,
    endDate: req.body.endDate || previousSpecial.endDate
  };

  Special.findByIdAndUpdate(specialId, special, (err, special) => {
    if (err) throw err;

    res.send(`Updated special: ${special}`);
  });
});

// @route   DELETE api/specials
// @desc    Delete a special
router.delete('/:id', (req, res) => {
  Special.findById(req.params.id)
    .then(special => special.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false, error: err }));
});

module.exports = router;
