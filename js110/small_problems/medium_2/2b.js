/*

(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
three numbers

Output:
one of four strings

Rules:


Examples:
*/
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
/*
Data structure:
array to sort the side lengths

Algorithm:
1. initialize an array to the three sides
2. sort the array by ascending value
3. if shortest side is zero or less,
return invalid
4. if the sum of the shorter two sides is not
greater than the third side, return invalid
5. if the shortest side is equal to the longest
side, return equilateral
6. if the middle value equals the shorter or the
longer value, return isosceles
7. else, return scalene.
*/

function triangle(first, second, third) {
  let array = [first, second, third];

  array.sort((a, b) => a - b);

  if (array[0] <= 0) {
    return 'invalid';
  }

  if (array[0] + array[1] <= array[2]) {
    return 'invalid';
  }

  if (array[0] === array[2]) {
    return 'equilateral';
  }

  if (array[1] === array[0] || array[1] === array[2]) {
    return 'isosceles';
  }

  return 'scalene';
}