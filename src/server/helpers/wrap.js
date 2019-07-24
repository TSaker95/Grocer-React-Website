// Wrapping anonymous route functions with this function allows express's error-handling
// functionality to work properly with asynchonous code. Express already properly handles
// errors thrown in synchronous code without additional configuration.
//
// Unless you have good reason not to, wrap every route in this function.

const wrap = fn => (...args) => {
  fn(...args).catch(args[2]);
};

module.exports = wrap;
