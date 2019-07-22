const router = require("express").Router();
const Special = require("../models/special.model");
const checkAuth = require("../middleware/check-auth");

// @route GET api/specials
// @desc get all specials
router.route("/").get((req, res) => {
  Special.find()
    .then(specials => res.json(specials))
    .catch(err => res.status(400).json(err));
});

// @route GET api/specials/:id
// @desc get special by id
router.route("/:id").get((req, res) => {
  Special.findById(req.params.id)
    .then(special => res.json(special))
    .catch(err => res.status(400).json(err));
});

// Using the checkAuth middleware here means only routes below require authentication.
router.use(checkAuth);

// @route POST api/specials/
// @desc add new specials
router.route("/").post((req, res) => {
  const { productId, salePrice, startDate, endDate } = req.body;

  const newSpecial = new Special({
    productId,
    salePrice,
    startDate,
    endDate
  });

  // save new special to mongo db database
  newSpecial
    .save()
    .then(() => res.json(newSpecial))
    .catch(err => res.status(400).json(err));
});

// @route PUT api/specials/:id
// @desc update special by id
router.put("/:id", async (req, res) => {
  const specialId = req.params.id;
  const previousSpecial = await Special.find({ _id: specialId })[0];

  const newDetails = {
    productId: req.body.productId || previousSpecial.productId,
    salePrice: req.body.price || previousSpecial.salePrice,
    startDate: req.body.startDate || previousSpecial.startDate,
    endDate: req.body.endDate || previousSpecial.endDate
  };

  Special.findByIdAndUpdate(specialId, newDetails, (err, updatedSpecial) => {
    if (err) throw err;

    res.json(updatedSpecial);
  });
});

// @route   DELETE api/specials
// @desc    Delete a special
router.delete("/:id", (req, res) => {
  Special.findById(req.params.id)
    .then(special => special.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
