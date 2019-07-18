const router = require("express").Router();
const User = require("../models/user.model");

// @route POST api/users
// @desc add new users
router.route("/").post((req, res) => {
  const { username, password } = req.body;

  const newUser = new User({ username, password });

  // save new user to mongo db database
  newUser
    .save()
    .then(() => res.json(`User registered: ${username}`))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
