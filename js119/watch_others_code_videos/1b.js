/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

You have to create a function that takes a positive integer and returns the
next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1

Input:
positive integer

Output:
smallest positive integer greater than the input that
has same digits (and number of digits) in a different order

Rules:
return -1 if no such number exists

Examples:
*/
console.log(nextBiggerNum(9) === -1); // true
console.log(nextBiggerNum(12) === 21); // true
console.log(nextBiggerNum(513) === 531); // true
console.log(nextBiggerNum(2017) === 2071); // true
console.log(nextBiggerNum(111) === -1); // true
console.log(nextBiggerNum(531) === -1); // true
console.log(nextBiggerNum(123456789) === 123456798); // true
/*
Data structure:
I can increment the input number repeatedly until the
condition is met. But testing for the same digits will
require strings.

Algorithm:
1. Initialize a variable to one (or nine for efficiency)
greater than the input.
2. Declare a loop.
  1. If the current number has the same digits as the input number,
  return that number.
  2. Increment the count.
  3. If the number of digits in the current number is greater than
  the input number, return -1.
*/

function nextBiggerNum(inputNumber) {
  let resultNumber = inputNumber + 9;

  while (true) {
    if (String(inputNumber).split('').sort().join('') === String(resultNumber).split('').sort().join('')) {
      return resultNumber;
    }

    resultNumber += 1;

    if (String(inputNumber).length !== String(resultNumber).length) {
      return -1;
    }
  }
}