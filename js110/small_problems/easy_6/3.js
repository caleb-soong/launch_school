function reverseNumber(integer) {
  let reverseNumberArray = String(integer).split('').reverse();
  while (reverseNumberArray[0] === '0') {
    reverseNumberArray.shift();
  }
  return Number(reverseNumberArray.join(''));
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));