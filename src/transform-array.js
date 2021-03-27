const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  var res = []
  for (let i=0; i<arr.length; i++) {
    if (arr[i+1] === "--discard-prev") {
      i++
    } else if (arr[i+1] === "--double-prev") {
      res.push(arr[i], arr[i])
      i++
    } else if (arr[i] === "--discard-next") {
      i++
    } else if (arr[i] === "--double-next" && arr[i+1] !== undefined) {
      res.push(arr[i+1])
    } else if (arr[i] !== "--discard-prev" && arr[i] !== "--double-prev" && arr[i] !== "--double-next") {
      res.push(arr[i])
    }
  }
  return res
};
