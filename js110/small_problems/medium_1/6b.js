/* eslint-disable max-len */
/*

(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
integer greater than or equal to 2 that represents
the desired number of digits of the final term

Output:
index of the first Fibonacci number that has
the number of digits specified by the argument

Rules:
The first Fibonacci number has an index of 1.

Examples:
*/

// The last example may take a minute or so to run.
/*
Data structure:
array to store numbers

Algorithm:
1. Declare an array with [1, 1];
2. Declare a loop that runs while the last
element of the array has fewer digits than
the argument.
  1. Generate the next term of the sequence.
  2. Add it to the array.
3. Return the length of the sequence.

*/

function findFibonacciIndexByLength(digits) {
  let sequence = [1n, 1n];

  while (String(sequence[sequence.length - 1]).length < digits) {
    let nextTerm = sequence[sequence.length - 2] + sequence[sequence.length - 1];

    sequence.push(nextTerm);
  }

  return sequence.length;
}

console.log(findFibonacciIndexByLength(2n));    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n));   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);