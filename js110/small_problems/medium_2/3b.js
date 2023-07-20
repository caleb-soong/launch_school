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
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
/*
Data structure:
aray to sort the angle measures

Algorithm:
1. initialize an array to the three angle measures
2. sort the array by ascending value
3. if the first element is zero or less, return invalid
4. if the sum isn't 180, return invalid
5. if any element is 90, return right
6. if the last element isn't greater than 90, return acute
7. return obtuse
*/

function triangle(first, second, third) {
  let array = [first, second, third];

  array.sort((a, b) => a - b);

  if (array[0] <= 0) {
    return 'invalid';
  }

  if (array[0] + array[1] + array[2] !== 180) {
    return 'invalid';
  }

  if (array.some(element => element === 90)) {
    return 'right';
  }

  if (array[2] <= 90) {
    return 'acute';
  }

  return 'obtuse';
}