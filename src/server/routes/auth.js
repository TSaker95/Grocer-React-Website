const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model"); // Import user model
const checkAuth = require("../middleware/check-auth");

// @route POST api/auth/login
// @desc checks given username and password. Signs jwt token if correct
router.route("/login").post((req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(400).json(err);
    } else if (!user) {
      res.status(401).json({ error: "Invalid username or password" });
    } else {
      user.checkPassword(password, (invalid, match) => {
        if (invalid) {
          res.status(500).json(`Error: ${invalid}`);
        }
        if (match) {
          const payload = { username };
          const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "72h"
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        } else {
          res.status(401).json({ error: "Invalid username or password" });
        }
      });
    }
  });
});

// @route GET api/auth/check
// @desc checks jwt token, sends a 200 if valid or a 401 if token invalid or missing.
router.get("/check", checkAuth, (req, res) => res.sendStatus(200));

module.exports = router;
