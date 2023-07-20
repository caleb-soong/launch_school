/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n.
If that value has more than one digit,
continue reducing in this way until a single-digit number is produced.
The input will be a non-negative integer.

Input:
number

Output:
single-digit number

Rules:
add the digits of the number to produce a new number
so do repeatedly until the result is a single-digit number

Examples:
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
/*
Data structure:


mathematical Algorithm:
1. subtract 9 from the input number until the
result is a single digit number

function digitalRoot(number) {
  while (number > 9) {
    number -= 9;
  }

  return number;
}

recursive algorithm:
1. add the digits together
2. if the result is single-digit,
return the number
3. call the function again

*/

function digitalRoot(number) {
  let sum = String(number).split('').reduce((sum, value) => sum + Number(value), 0);

  if (String(sum).length === 1) return sum;

  return digitalRoot(sum);
}