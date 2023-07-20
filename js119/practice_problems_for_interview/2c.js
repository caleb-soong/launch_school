/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

Input:
array of integers

Output:
number that is the minimum sum of 5 consecutive
numbers in the array

Rules:


Examples:
*/
console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
/*
Data structure:


Algorithm:
1. If the array contains less than 5 elements, the function should return null.
2. initialize empty result array.
3. iterate through the input array
  1. add all sums of five consecutive input array elements to the result array.
4. sort the result array by ascending value.
5. return the first element of the sorted result array
*/

function minimumSum(array) {
  if (array.length < 5) return null;

  let sumsArray = [];

  for (let startIndex = 0; startIndex <= array.length; startIndex += 1) {
    sumsArray.push(array.slice(startIndex, startIndex + 5)
      .reduce((sum, value) => sum + value, 0));
  }

  let sortedSums = sumsArray.sort((a, b) => a - b);

  return sortedSums[0];
}