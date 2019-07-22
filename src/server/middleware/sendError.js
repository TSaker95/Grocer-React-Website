const sendError = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  }
  res.status(400).send(err);
};

module.exports = sendError;
