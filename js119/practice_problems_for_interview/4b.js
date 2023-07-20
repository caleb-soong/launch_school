// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.
/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
array of integers

Output:
array of integers (of length 2)

Rules:
Keep the order of the integers in the input array?
closest together is absolute value of difference (distance)
integers don't have to be consecutive in input array

Examples:
*/
console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
/*
Data structure:
array of arrays to store the pairs of numbers

Algorithm:
1. Create a sorted copy of the input array
by ascending length.
2. Create an empty array to contain subarrays.
3. Create empty subarray.
4. Iterate through the sorted input array.
  1. Assign subarray to current element of the sorted input array
  and the next element.
  2. Add subarray to array of subarrays.
5. Sort the array of sub arrays by smallest distance
between subarray elements.
6. Create a result subarray variable and
assign to the first subarray in the array of subarrays.
7. Filter unsorted input array for values in the result subarray.
8. If filtered array has its elements in the same order,
return result subarray.
Else, return the reverse of the result subarray.
*/

function closestNumbers(inputArray) {
  let sortedInputArray = inputArray.slice().sort((a, b) => a - b);

  let pairsArray = [];

  let subarray = [];

  for (let index = 0; index < sortedInputArray.length - 1; index += 1) {
    subarray = [sortedInputArray[index], sortedInputArray[index + 1]];

    pairsArray.push(subarray);
  }

  let sortedPairsArray = pairsArray.sort(
    (a, b) => Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]));

  let resultSubarray = sortedPairsArray[0];

  let filteredInputArray = inputArray.filter(element => {
    return element === resultSubarray[0] || element === resultSubarray[1];
  });

  if (filteredInputArray.join('') === resultSubarray.join('')) {
    return resultSubarray;
  } else {
    return resultSubarray.reverse();
  }
}