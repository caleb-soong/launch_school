/*
P: Input is a positive integer. Output is a mathematical expression,
the difference between the square of the sum of the first n positive integers
and the sum of the squares of the first n positive integers.
E:
D: Numeric operations will be performed. Arrays will be used to store the
first n positive integers and the squares of those integers.
A: The main function will define a mathematical expression which calls two
helper functions. The first helper function computes the first n positive
integers and stores them in an array. The second helper function transforms
that array into the squares of those numbers.
*/

function sumSquareDifference(count) {
  return (computeIntegers(count).reduce((sum, value) => sum + value) ** 2)
  - squareIntegers(count).reduce((sum, value) => sum + value);
}

function computeIntegers(count) {
  let positveIntegers = [];
  while (count > 0) {
    positveIntegers.unshift(count);
    count -= 1;
  }
  return positveIntegers;
}

function squareIntegers(count) {
  return computeIntegers(count).map(integer => integer ** 2);
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));