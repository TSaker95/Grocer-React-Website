const jwt = require('jsonwebtoken');

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
        req.email = decoded.email;
        next();
      }
    });
  }
};

if (process.env.NODE_ENV !== 'test') {
  module.exports = checkAuth;
} else {
  module.exports = (req, res, next) => { next(); };
}
