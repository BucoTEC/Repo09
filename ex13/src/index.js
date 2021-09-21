// Only change code below this line
function inverseWhile() {
  var i = 5;
  var test = [];
  while (i >= 0) {
    var num = i.toString();
    i--;
    test.push(num);
  }
  fiveNumbers = test.toString();
  return fiveNumbers;
}
// Only change code above this line

console.log(inverseWhile());
module.exports = inverseWhile;
