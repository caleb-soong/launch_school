/*
P: Input is the index of a Fibonacci number.
Output is the Fibonacci number at that index.
E: The first two Fibonacci numbers are both 1 by definition.
D: The input and output are numbers. Addition is needed.
A: The function must be defined recursively which means
it must call itself.
*/

function fibonacci(nth) {
  if (nth === 1 || nth === 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));