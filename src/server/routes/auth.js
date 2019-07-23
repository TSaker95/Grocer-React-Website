const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const checkAuth = require('../middleware/checkAuth');
const wrap = require('../helpers/wrap');
const sendError = require('../middleware/sendError');

// @route POST api/auth/login
// @desc checks given username and password. Signs jwt token if correct
router.post('/login', wrap(async (req, res) => {
  const { username, password } = req.body;
  const userArray = await User.find({ username });
  const user = userArray[0];

  if (user) {
    user.checkPassword(password, (invalid, match) => {
      if (invalid) {
        res.status(500).json(`Error: ${invalid}`);
      } else if (match) {
        const payload = { username };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '72h' });
        res.cookie('token', token, { httpOnly: true }).sendStatus(200);
      } else {
        res.status(401).json({ error: 'Invalid username or password' });
      }
    });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
}));

// @route GET api/auth/check
// @desc checks jwt token, sends a 200 if valid or a 401 if token invalid or missing.
router.get('/check', checkAuth, wrap(async (req, res) => res.sendStatus(200)));

router.use(sendError);

module.exports = router;
