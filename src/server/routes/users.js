const router = require("express").Router();
const jwt = require("jsonwebtoken")
let User = require("../models/user.model"); // Import use model

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

// @route POST api/users/login
// @desc checks given email and password. Signs jwt token if correct
router.route("/login").post((req, res) => {
  const { email, password } = req.body;
  
  User.findOne({ email }, (err, user) => {
    if (err) { res.status(400).json(`Error: ${err}`); } 
    if (!user) { res.status(401).json({ error: 'Invalid email or password' }); }
    
    user && user.checkPassword(password, (err, same) => {
      if (err) { res.status(500).json(`Error: ${err}`); }
      if (same) {
        const payload = { email };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: '72h'
        });
        res.cookie('token', token, { httpOnly: true })
          .sendStatus(200);
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    });
  });
});

module.exports = router;
