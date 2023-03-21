function stringy(wholeNumber) {
  let numberString = '';
  for (let index = 0; index < wholeNumber; index += 1) {
    if (index % 2 === 0) {
      numberString += '1';
    } else {
      numberString += '0';
    }
  }
  return numberString;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));