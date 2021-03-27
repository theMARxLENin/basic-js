const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var res = {}
  res.turns = calculateTurns(disksNumber)
  var turnsPerSecond = turnsSpeed / 3600
  res.seconds = Math.floor(res.turns / turnsPerSecond)
  return res
};

function calculateTurns(n) {
  if (n == 1) {
    return 1
  }
  return 2 * (calculateTurns(n-1)) + 1
}