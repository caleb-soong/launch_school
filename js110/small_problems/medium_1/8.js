/*
P: Input is the index of a Fibonacci number.
Output is the Fibonacci number at that index.
E: The first two Fibonacci numbers are both 1 by definition.
D: Input and output are both numbers. Addition is needed.
An array will be used to store the Fibonacci numbers as they are
computed. It will be initialized to [1, 1].
A: The function must be defined procedurally, not recursively.
This means each Fibonacci number in the sequence must be
defined or computed sequentially until the desired number is computed.
*/

function fibonacci(nth) {
  let fibonacciSequence = [1, 1];
  while (fibonacciSequence.length < nth) {
    fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 1]
                          + fibonacciSequence[fibonacciSequence.length - 2]);
  }
  return fibonacciSequence[fibonacciSequence.length - 1];
}

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));