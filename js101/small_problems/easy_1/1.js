function isOdd(integer) {
  return Math.abs(integer) % 2 !== 0;
}

console.log(isOdd(-2));
console.log(isOdd(-1));
console.log(isOdd(0));
console.log(isOdd(1));
console.log(isOdd(2));