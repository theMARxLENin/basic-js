const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  var cats = 0
  
  for (let line of backyard) {
    for (let i in line) {
      if (line[i] == "^^") {
        cats++
      }
    }
  }
  return cats
};
