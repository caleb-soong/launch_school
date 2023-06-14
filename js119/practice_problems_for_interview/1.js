// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

/*
Understand the problem:
Input: array of integers
Output: array of integers

Rules:
1. Output has the same number of elements as the input
2. Each number compared to the current number must pass two tests:
  1. It must be smaller than current number.
  2. It must not have been previously compared to current number.
*/

// Examples:
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

//Data structure: arrays and integers

/*
Algorithm:
1. Declare an empty result array.
2. Declare a count variable.
3. Create a copy of the input array containing only unique values.
4. Iterate through all elements of the input array.
  1. Assign the count variable equal to 0.
  2. Iterate through all elements of the array copy
  to compare to the current element.
  (It can and will be compared to itself).
    1. If current element (input array) minus current element
    (array copy) is greater than zero, increment the count.
  3. Push the value of the count to the result array.
5. Return the result array.
*/

function smallerNumbersThanCurrent(inputArray) {
  let resultArray = [];

  let count;

  let arrayCopy = Array.from(new Set(inputArray));

  for (let outerIndex = 0; outerIndex < inputArray.length; outerIndex += 1) {
    count = 0;

    for (let innerIndex = 0; innerIndex < arrayCopy.length; innerIndex += 1) {
      if (inputArray[outerIndex] - arrayCopy[innerIndex] > 0) {
        count += 1;
      }
    }

    resultArray.push(count);
  }

  return resultArray;
}