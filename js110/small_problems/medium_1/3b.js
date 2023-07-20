/* eslint-disable max-len */
/*
Input:
number

Output:
number with same digits in a different order

Rules:
For a number with n digits, perform n - 1 rotations
(A single digit number will not rotate)
The first rotation is performed on all digits.
Each subsequent rotation excludes one more digit
than the previous rotation. These digits are the
leftmost digits.

Examples:
*/
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
/*

Data structure:
number must be converted to an array
and then back to a number

Algorithm:
1. Assign a count variable to the number of
digits in the input number.
2. Declare a loop.
  1. Call the helper function on input
  number with count variable
  2. Decrement the count.
3. If the number has a leading zero,
convert to a string, remove the zero,
and convert back to a number.
4. Return the number.
*/

/*
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Example:
735291
352917
329175
321759
321597
321579
*/

function rotateDigits(array) {
  let firstElement = array.shift();

  array.push(firstElement);

  return array;
}

function rotateRightmostDigits(number, count) {
  let inputString = String(number);

  let inputArray = inputString.split('');

  let fixedPart = inputArray.slice(0, inputArray.length - count);

  let rotatingPart = inputArray.slice(inputArray.length - count);

  rotatingPart = rotateDigits(rotatingPart);

  let rotatedArray = fixedPart.concat(rotatingPart);

  let rotatedString = rotatedArray.join('');

  let rotatedNumber = Number(rotatedString);

  return rotatedNumber;
}

function maxRotation(number) {
  let count = String(number).length;

  while (count > 1) {
    number = rotateRightmostDigits(number, count);

    count -= 1;
  }

  while (String(number)[0] === 0) {
    number = Number(String(number.slice(1)));
  }

  return number;
}