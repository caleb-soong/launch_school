// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/*
Understand the problem:
Input: array of integers
Output: array of two integers
Rules: I think the input array must have at least two integers.
If it had exactly two integers, then the output would be the same
as the input.
"Closest together in value" means that the distance between the
numbers is the smallest.
The integers do not have to be consecutive per example 2.
*/

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

//Data structure: arrays and numbers
// I may want to create several arrays of two numbers to
//be able to return the one with the smallest difference.

/*
Algorithm:
1. Create an empty result array to contain subarrays of every
combination of two elements from the input array.
2. Create an empty subarray to contain a single pair of
elements from the input array.
3. Iterate through the input array (for the first number).
  1. Iterate through the input array (for the second number).
    1. Assign the subarray to the current elements.
    2. Push the subarray to the result array.
4. Sort the result array by smallest distance between the
elements of its subarrays (ascending).
5. Return the first subarray.
*/

function closestNumbers(inputArray) {
  let arrayOfArrays = [];

  let subarray;

  for (let first = 0; first < inputArray.length - 1; first += 1) {
    for (let second = first + 1; second < inputArray.length; second += 1) {
      subarray = [inputArray[first], inputArray[second]];

      arrayOfArrays.push(subarray);
    }
  }

  arrayOfArrays.sort((a, b) => Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]));

  return arrayOfArrays[0];
}