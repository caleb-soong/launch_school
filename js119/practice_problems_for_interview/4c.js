/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

Input:
array of integers

Output:
array of two integers

Rules:


Examples:
*/
console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
/*
Data structure:


Algorithm:
1. initialize an empty array to hold subarrays
2. iterate over the input array
  1. iterate over the input array
    1. push to the result array a subarray of two elements
3. sort the result array by smallest difference
between the elements in the subarrays and
return the first subarray (element of result array)
*/

function closestNumbers(inputArray) {
  let pairsArray = [];

  for (let first = 0; first < inputArray.length - 1; first += 1) {
    for (let second = first + 1; second < inputArray.length; second += 1) {
      pairsArray.push([inputArray[first], inputArray[second]]);
    }
  }

  return pairsArray
    .sort((a, b) => Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]))[0];
}