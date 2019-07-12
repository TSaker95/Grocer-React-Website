const router = require("express").Router();
const User = require("../models/user.model"); // Import user model

// @route POST api/users
// @desc add new users
router.route("/").post((req, res) => {
  const { email, password } = req.body;

  const newUser = new User({ email, password });

  // save new user to mongo db database
  newUser
    .save()
    .then(() => res.json(`User registered: ${email}`))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
