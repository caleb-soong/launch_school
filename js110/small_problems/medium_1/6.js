/*
P: Input is an integer >= 2 representing the number of digits in the last
Fibonacci number to be generated.
Output is an integer, the index of the first (and smallest)
Fibonacci number with the number of digits specified by the input.
Fibonacci numbers must be generated in ascending order.
E: Since the input must be at least two, the smallest output is the first
(and smallest) Fibonacci number with two digits, which is 13, the seventh
Fibonacci number.
D: Using an array to store Fibonacci numbers will allow easy access to the
index of the number. However, since arrays use zero-based indexing, an
adjustment must be made to access the index of the Fibonacci number in the
sequence. For example, the third Fibonacci number (index 3) will be the third
element of the array and have an index of 2. Additionally, since the first two
Fibonacci numbers are both 1 by definition, the array can be initialized with
those.
A: Initialize an array to [1, 1]. Subsequent values will be pushed to the array.
Create a loop that continually generates and pushes Fibonacci numbers until the
desired number is found. Then the index of that number must be returned.
A helper function can aid with readability if it generates the Fibonacci number
by accepting as its two arguments the most recent two Fibonacci numbers.
*/

function findFibonacciIndexByLength(numberOfDigits) {
  let fibonacciNumbers = [1, 1];
  while (String(fibonacciNumbers[fibonacciNumbers.length - 1]).length
  < numberOfDigits) {
    let nextFibonacciNumber =
    makeFibonacciNumber(fibonacciNumbers[fibonacciNumbers.length - 2],
      fibonacciNumbers[fibonacciNumbers.length - 1]);
    fibonacciNumbers.push(nextFibonacciNumber);
  }
  return fibonacciNumbers.indexOf(
    fibonacciNumbers[fibonacciNumbers.length - 1]) + 1;
}

function makeFibonacciNumber(secondToLastNumber, LastNumber) {
  return secondToLastNumber + LastNumber;
}

console.log(findFibonacciIndexByLength(2) === 7);
console.log(findFibonacciIndexByLength(3) === 12);
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);
console.log(findFibonacciIndexByLength(100) === 476);
console.log(findFibonacciIndexByLength(1000) === 4782);
console.log(findFibonacciIndexByLength(10000) === 47847);