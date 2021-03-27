const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var additionString = "";
  if ("addition" in options) {
    additionString = String(options.addition);
  }
  var additionTotal = additionString;
  if (additionString) {
    for (let i=1; i<options.additionRepeatTimes; i++) {
      additionTotal += (options.additionSeparator || '|') + additionString
    }
  };

  var strWithAdded = String(str) + additionTotal;
  var resultString = strWithAdded;
  for (let i=1; i<options.repeatTimes; i++) {
    resultString += (options.separator || '+') + strWithAdded
  }
  return resultString
};
  