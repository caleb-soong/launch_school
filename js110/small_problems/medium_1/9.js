/*
P: Input is the index of a Fibonacci number.
Output is the Fibonacci number at that index.
E: The first two Fibonacci numbers are both 1 by definition.
D: The input and output are numbers. Addition is needed.
A: The function must be defined recursively which means
it must call itself. Memoization must store computed values
so that recursion does not compute any value more than once.
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

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));