function twice(wholeNumber) {
  let numberString = wholeNumber.toString();
  if (numberString.length % 2 === 0 &&
      numberString.substring(0, numberString.length / 2) ===
      numberString.substring(numberString.length / 2)) {
    return wholeNumber;
  } else {
    return wholeNumber * 2;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));