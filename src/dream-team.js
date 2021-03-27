const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false
  }
  var res = ""
  var arr = []
  members.forEach(el => {
    if (typeof el == 'string') {
      arr.push(el.trim().toUpperCase())
    }
  });
  arr.sort()
  arr.forEach(element => {
    res += element[0]
  });
  return res
};
