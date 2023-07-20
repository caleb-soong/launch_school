/*

(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
number (nth term of sequence)

Output:
number (value of the nth term)

Rules:
Use recursion with memoization

Examples:
*/

/*
Data structure:


Algorithm:

*/

let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050