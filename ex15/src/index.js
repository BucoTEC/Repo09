// Only change code below this line
function myDoWhile() {
  var i = 0;
  var test = [];
  while (i < 9) {
    if (i === 0) {
      test.push(i);
      i++;
      test.push(` ${i}`);
    } else {
      i++;
      test.push(` ${i}`);
    }
  }
  var myNumbers = test.toString();
  return myNumbers;
}

console.log(myDoWhile());

// Only change code above this line

module.exports = myDoWhile;
