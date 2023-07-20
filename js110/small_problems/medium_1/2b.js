/*
Input:
number (to have its digits rotated)
another number (number of digits to rotate)
Output:
number with same digits as input number
but in a different order (usually)
Rules:
rotate only the n rightmost digits where n is the
second argument
Rotation means to take the first digit and move it
to the end, shifting others to the left
The digits not used in the rotation will remain
in place.
Examples:
*/
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
/*
Data structure:
The first input needs to be converted to a string
and then an array to have its digits manipulated.
It will be converted back to a number.

Helper function:
Input: array
Output: array (rotated)
1. Remove the first array element.
2. Add it to the end of the array.
3. Return the modified array.

Algorithm:
1. Convert the number to a string.
2. Convert the string to an array.
3. Take a slice of the array for
the digits that don't need to be
rotated.
4. Take a slice of the array for
the digits that need to be rotated.
5. Call the helper function on that
slice of the array.
6. Join the non-rotated array with
the rotated array.
7. Convert that array to a string.
8. Convert that string to a number.
9. Return that number.
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

  let rotatingPart = rotateDigits(inputArray.slice(inputArray.length - count));

  let rotatedArray = fixedPart.concat(rotatingPart);

  let rotatedString = rotatedArray.join('');

  let rotatedNumber = Number(rotatedString);

  return rotatedNumber;
}