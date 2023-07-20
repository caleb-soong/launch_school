/*
P: input and output are numbers
if you only rotate one digit, nothing changes
if you rotate two digits, they change places
if you rotate three or more digits, you can see the pattern.
the leftmost digit included in the rotation must be identified
so it can move to the end (right).
E: no edge cases
D: the input number can be converted to a string, then altered,
then converted back into a number when returned
A: convert to a string, create empty string, iterate through input string
concatenate non-rotating digits to empty string, then skip over leftmost
rotating digit, concatentate remaining digits, and concatenate the skipped digit
*/

function rotateRightmostDigits(number, count) {
  let result = '';
  let inputString = String(number);
  for (let index = 0; index < inputString.length; index += 1) {
    if (index !== inputString.length - count) {
      result += inputString[index];
    }
  }
  result += inputString[inputString.length - count];
  return Number(result);
}

console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 2));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 4));
console.log(rotateRightmostDigits(735291, 5));
console.log(rotateRightmostDigits(735291, 6));