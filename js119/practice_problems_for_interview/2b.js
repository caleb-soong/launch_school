/* eslint-disable max-len */
/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
array of numbers

Output:
number (sum) or null

Rules:
if array length is less than 5, return null

Examples:
*/
console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
/*
Data structure:
array to store sums

Algorithm:
1. handle null case
2. create empty result array
3. Iterate through input array
  1. Add sums to result array
4. Sort the result array.
5. Return the minimum value.
*/

function minimumSum(array) {
  if (array.length < 5) {
    return null;
  }

  let result = [];

  for (let index = 0; index < array.length - 4; index += 1) {
    result.push(array.slice(index, index + 5).reduce((sum, value) => sum + value, 0));
  }

  result.sort((a, b) => a - b);

  return result[0];
}