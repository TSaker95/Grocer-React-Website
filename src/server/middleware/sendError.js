// In almost every case, if a request goes bad we just want to send the error back to the requester.
// This middleware lets us do that in every route without repeating the same code dozens of times.
//
// EXTENSION: use a switch statement to change the status code by error type.
// e.g. set status to 404 on CastError.

const sendError = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  }
  res.status(400).send(err);
};

module.exports = sendError;
