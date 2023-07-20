/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

Input:
array of integers

Output:
array of same length

Rules:


Examples:
*/
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]
/*
Data structure:
[8, 1, 2, 2, 3]
[8, 1, 2, 3]

Algorithm:
1. initialize an empty result array.
2. Create an array copy containing only unique values.
3. Iterate over the input array.
  1. Initialize a count to 0.
  2. Iterate over the array copy.
    1. If the element is in the array copy is less than
    the element in the input array, increment the count.
  3. push the count to the result array.
4. return the result array.
*/

function smallerNumbersThanCurrent(array) {
  let result = [];

  let uniqueValues = Array.from(new Set(array));

  for (let outerIndex = 0; outerIndex < array.length; outerIndex += 1) {
    let count = 0;

    for (let innerIndex = 0; innerIndex < uniqueValues.length;
      innerIndex += 1) {
      if (uniqueValues[innerIndex] < array[outerIndex]) {
        count += 1;
      }
    }

    result.push(count);
  }

  return result;
}