/* eslint-disable max-len */
/*

(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
number (nth term of sequence)

Output:
number (value of nth term)

Rules:
Use a procedural function
(no recursion)

Examples:
*/
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
/*
Data structure:
array to store each term of the sequence

Algorithm:
1. Initialize an array to [1, 1]
2. Declare a loop that runs while the length of the array
is less than the input value.
  1. Initialize a variable to the sum of the last two
  terms in the array.
  2. Add that value to the array.
3. Return the last value of the array.
*/

function fibonacci(number) {
  let sequence = [1, 1];

  while (sequence.length < number) {
    let nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];

    sequence.push(nextTerm);
  }

  return sequence[sequence.length - 1];
}