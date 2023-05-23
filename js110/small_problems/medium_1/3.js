/*
P: The input is a number, and the output is the number after rearranging the
digits by performing n - 1 rotations where n is the number of digits.
A rotation is defined as moving the leftmost digit to the rightmost position.
A maximum rotation performs multiple such rotations when n >= 3.
When n = 1, the function should return the input number.
When n = 2, the function should return the input number
with its two digits swapped.
The first rotation considers all digits, and each successive rotation ignores
one more digit than the previous rotation, counting from the left.
The hypothetical final rotation of only the rightmost digit is unneccesary.

E: Zeroes will be rotated as any other digit, but leading zeroes in the final
answer must be truncated.

D: The input number will be converted to a string
before any rotations and then back to a number after all rotations
and after any leading zeroes are truncated.

A: Convert the input number to a string of digits.
Use a loop that runs n - 1 times where n is the number of digits which is also
the length of the string. Inside the loop, rotations will be performed which
reassign the value of the string. A counter must increment to increase
the number of digits to be excluded from the next rotation, starting at zero
excluded digits and counting from the left.
A conditional statement inside of a loop will truncate leading zeroes from the
result before it is converted to a number.
*/

function maxRotation(number) {
  let numberString = String(number);
  numberString = numberString.slice(1) + numberString[0];
  for (let index = 0; index < numberString.length - 2; index += 1) {
    numberString =
    numberString.slice(0, index + 1) +
    numberString.slice(index + 2) +
    numberString[index + 1];
  }
  while (numberString[0] === '0') {
    numberString = numberString.slice(1);
  }
  return Number(numberString);
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));