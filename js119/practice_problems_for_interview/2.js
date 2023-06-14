// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

/*
Understand the problem:
Input: array of integers
Output: integer or null
  1. Integer representing the smallest sum of any five
  consecutive numbers in the input array
  2. Null or input array length is less than five
Rules:
The number of sums is equal to the length of the input
array minus 4.
The smallest sum, if there are multiple, might not be
the first sum calculated.
*/

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".

// Data structure: arrays, integers, null

/*
Algorithm:
1. If the input array length is less than 5, return null.
2. Declare an empty result array.
3. Declare a variable for the sum of each group of five
consecutive integers.
4. Iterate through the input array up to (but not including)
the index at array length minus 4.
  1. Assign the sum variable to the sum of the current element
  and the next four elements using slice and reduce.
  2. Push the sum to the result array.
5. Return the smallest element of the result array.
*/

function minimumSum(inputArray) {
  if (inputArray.length < 5) {
    return null;
  }

  let resultArray = [];

  let sum;

  for (let index = 0; index < inputArray.length - 4; index += 1) {
    sum = inputArray.slice(index, index + 5)
      .reduce((sum, value) => sum + value, 0);

    resultArray.push(sum);
  }

  return Math.min(...resultArray);
}