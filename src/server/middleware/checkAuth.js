const jwt = require('jsonwebtoken');

// Searches the request for a valid JWT and stops the response if missing or invalid.
const checkAuth = (req, res, next) => {
  const token = req.body.token
    || req.query.token
    || req.headers['x-access-token']
    || req.cookies.token;
  if (!token) {
    res.status(401).send('No token provided');
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send('Invalid token');
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
};

module.exports = checkAuth;
