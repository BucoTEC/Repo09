// Only change code below this line
function myForLoop1() {
  var test = [];
  for (var i = 0; i < 10; i += 2) {
    if (i === 0) {
      test.push(i);
    } else {
      test.push(` ${i}`);
    }
  }

  var evenNumbers = test.toString();
  return evenNumbers;
}

function myForLoop2() {
  var test = [];
  for (var i = 8; i >= 0; i -= 2) {
    if (i === 8) {
      test.push(i);
    } else {
      test.push(` ${i}`);
    }
  }

  var evenInverseNumbers = test.toString();
  return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());

// Only change code above this line

module.exports = {
  myForLoop1,
  myForLoop2,
};
