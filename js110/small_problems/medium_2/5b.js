/* eslint-disable max-len */
/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
number

Output:
smallest featured number greater than input
OR
"There is no possible number that fulfills those requirements."

Rules:
odd number
multiple of 7
digits appear once (at most)
The largest possible featured number is 9876543201

Examples:
*/
console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
/*
Data structure:
array to test for repeating digits

Algorithm:
1. If it's greater than or equal to 9876543201,
return error message
2. Initialize featured number
variable to input + 1
3. Declare a loop that tests the
conditions of a featured number.
  If
  1. odd
  2. multiple of 7
  3. unique digits
  return featured number.
  else
  4. Increment the featured number variable.
*/

function featured(number) {
  if (number >= 9876543201) {
    return 'There is no possible number that fulfills those requirements.';
  }

  let featuredNumber = number + 1;

  while (true) {
    if (featuredNumber % 2 === 1 && featuredNumber % 7 === 0 &&
      Array.from(new Set(String(featuredNumber).split(''))).join('') === String(featuredNumber).split('').join('')) {
      return featuredNumber;
    }

    featuredNumber += 1;
  }
}