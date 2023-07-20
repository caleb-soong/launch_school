/*

(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
number (nth term of sequence)

Output:
number (value of nth term)

Rules:
Use recursion

Examples:
*/
console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
/*
Data structure:
array to store n terms of the sequence

Algorithm:
1. If input is 1 or 2, return 1
2. return the sum of the return value of the function with
(input minus 1) as argument and the return value of the function
with (input minus 2) as argument.
*/

function fibonacci(number) {
  if (number === 1 || number === 2) {
    return 1;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}