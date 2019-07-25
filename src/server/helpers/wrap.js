// Wrapping route callbacks in this function allows express's error-handling functionality
// to work properly with asynchonous code. Express already properly handles errors thrown
// in synchronous code without additional configuration or a helper like this.
//
// Unless you have good reason not to, wrap everygit  route callback in this function.

const wrap = fn => (...args) => {
  fn(...args).catch(args[2]);
};

module.exports = wrap;
