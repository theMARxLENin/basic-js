const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var depths = [0]
    for (let elem of arr) {
      if (elem instanceof Array) {
        depths.push(this.calculateDepth(elem))
      }
    }
    return 1 + depths.reduce((p, v) => p > v ? p : v )
  }
};