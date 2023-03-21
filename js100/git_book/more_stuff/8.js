function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(null));
console.log(isNotANumber(NaN));
console.log(isNotANumber(undefined));
console.log(isNotANumber(''));
console.log(isNotANumber(0));
console.log(isNotANumber(Infinity));
console.log(isNotANumber(-Infinity));
console.log(isNotANumber(false));