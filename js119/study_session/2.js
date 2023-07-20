/* eslint-disable max-lines-per-function */
// 2
// Given two arrays, return whether the two arrays are opposites of each other.
// That means both arrays are comprised only from elements a and b and the
// occurrences of these elements are swapped between the two arrays.

/*

Understand the problem:

Input: two arrays
Can be different lengths
Either or both can be empty

Output: boolean

Rules:
There may be only two elements between both arrays.
Arrays must be same length.
Given an index, each array must have the opposite element
at that index that the other array has.
*/

// Examples
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])); // true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])); // true
console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14])); // false
console.log(isAntiArray([3.14, true, 3.14], [true, "3.14", true])); // false
console.log(isAntiArray([], [])); // false
console.log(isAntiArray([3.14], [3.14])); // false
console.log(isAntiArray([3.14], [false])); // false
console.log(isAntiArray([3.14, false, 3.14], [false, 3.14, true])); // false
console.log(isAntiArray([3.14, true], [3.14])); // false

//Data structure: arrays

/*
Algorithm:
1. If either array contains fewer than two elements, return false.
2. If the arrays are different lengths, return false.
3. Initialize variables to the first elements of each array.
4. If the first elements in each array the same, return false.
5. Iterate through the first array.
  1. If any element is not the same as either variable, return false.
6. Iterate through the second array.
  1. If any element is not the same as either variable, return false.
7. Iterate through the first array.
  1. If any element is the same as the corresponding element from the
  second array, return false.
8. Return true.
*/

function isAntiArray(array1, array2) {
  if (array1.length < 2 || array2.length < 2) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  let element1 = array1[0];
  let element2 = array2[0];

  if (element1 === element2) {
    return false;
  }

  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] !== element1 && array1[index] !== element2) {
      return false;
    }
  }

  for (let index = 0; index < array2.length; index += 1) {
    if (array2[index] !== element1 && array2[index] !== element2) {
      return false;
    }
  }

  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] === array2[index]) {
      return false;
    }
  }

  return true;
}