function switchCase(letter) {
  // Only change code below this line
  switch (letter) {
    case "a":
      var animals = "antelope";
      break;
    case "b":
      var animals = "bird";
      break;
    case "c":
      var animals = "cat";
      break;
    default:
      var animals = "stuff";
      break;
  }
  // Only change code above this line
  return animals;
}

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));

module.exports = switchCase;
