const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!(typeof sampleActivity == "string") || !parseFloat(sampleActivity)) {
    return false
  }
  
  var floatValue = parseFloat(sampleActivity)
  if (floatValue <= 0 || floatValue >= 15) {
    return false
  }
  var t = Math.log(MODERN_ACTIVITY / floatValue) / (0.693 / HALF_LIFE_PERIOD)
  return Math.ceil(t)
};
