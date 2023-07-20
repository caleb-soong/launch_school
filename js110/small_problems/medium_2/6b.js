/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
number (count)

Output:
result of a mathematical expression:
(square of sum of first count integers) -
(sum of squares of the first count integers)

Rules:


Examples:
*/
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
/*
Data structure:
arrays to store integers and squares of integers

Algorithm:
1. Initialize two empty arrays.
2. Declare a count variable to 1.
2. Populate arrays with integers
and squares of integers.
3. return the correct expression.
*/

function sumSquareDifference(number) {
  let integers = [];
  let squares = [];
  let count = 1;

  while (count <= number) {
    integers.push(count);
    squares.push(count * count);
    count += 1;
  }

  let integersSum = integers.reduce((sum, value) => sum + value, 0);
  let squaresSum = squares.reduce((sum, value) => sum + value, 0);

  return (integersSum ** 2) - (squaresSum);
}