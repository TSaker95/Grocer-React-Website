const router = require("express").Router();
let Special = require("../models/special.model"); // Import use model

// @route GET api/specials
// @desc get all specials
router.route("/").get((req, res) => {
  Special.find()
    .then(specials => res.json(specials))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route POST api/specials/add
// @desc add new specials
router.route("/add").post((req, res) => {
  const productId = req.body.productId;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  const newSpecial = new Special({
    productId,
    startDate,
    endDate
  });

  // save new special to mongo db database
  newSpecial
    .save()
    .then(() => res.json("Special added."))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route GET api/specials/:id
// @desc get special by id
router.route("/:id").get((req, res) => {
  Special.findById(req.params.id)
    .then(special => res.json(special))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// @route   DELETE api/specials
// @desc    Delete a special
router.delete("/:id", (req, res) => {
  Special.findById(req.params.id)
    .then(special => special.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
