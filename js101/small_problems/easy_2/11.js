function centerOf(string) {
  if (string.length % 2 === 0) {
    return string[(string.length / 2) - 1] + string[(string.length / 2)];
  } else {
    return string[((string.length / 2) - 0.5)];
  }
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));