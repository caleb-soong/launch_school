/*
You have to create a function that takes a positive integer and returns the
next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071

If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1

P: Input is a positive integer; output is a larger positive integer or -1.
The digits are rearranged to form a larger number, if possible.
If the digits can be rearranged in multiple ways to form larger numbers,
than the smallest of those numbers must be returned.
If the digits cannot be rearranged to form a larger number, -1 is returned.

E: If the input is a single digit number, then -1 is necessarily returned.
If the digits in the input decrease from left to right, then -1 is
necessarily returned.
If, for any digit, a greater digit can be found anywhere to the right, then
there is at least one way to rearrange the numbers to form a greater number.

D: The input may need to be converted to a string in order to have its digits
rearranged.

A:
1. If input < 10, return -1
2. If digits in input are descending, return -1
3. Declare a result variable equal to the input number.
4. Increment the result variable.
5. If result variable has the same digits as the input, then return it.
Else, return to step 4.
*/

function nextBiggerNum(integer) {
  if (integer < 10) return -1;
  if (String(integer) === String(integer).split('').sort((a, b) => b - a).join('')) return -1;
  let result = integer;
  while (true) {
    result += 1;
    if (String(result).split('').sort().join('') === String(integer).split('').sort().join('')) {
      return result;
    }
  }
}

console.log(nextBiggerNum(9) === -1); // true
console.log(nextBiggerNum(12) === 21); // true
console.log(nextBiggerNum(513) === 531); // true
console.log(nextBiggerNum(2017) === 2071); // true
console.log(nextBiggerNum(111) === -1); // true
console.log(nextBiggerNum(531) === -1); // true
console.log(nextBiggerNum(123456789) === 123456798); // true