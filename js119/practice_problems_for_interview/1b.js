/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
array of numbers

Output:
array of numbers of the same length

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
arrays

Algorithm:
[8, 1, 2, 3]
1. Create an array of the unique values from the input array
2. Create an empty result array
3. Iterate through the input array.
  1. Declare a count variable.
  2. Iterate through the unique values array.
    1. If value from input is greater than value from unique values,
    increment the count.
  3. Push the count to the result array.
4. Return result.
*/

function smallerNumbersThanCurrent(array) {
  let uniqueValuesArray = Array.from(new Set(array));

  let resultArray = [];

  for (let index1 = 0; index1 < array.length; index1 += 1) {
    let count = 0;

    for (let index2 = 0; index2 < uniqueValuesArray.length; index2 += 1) {
      if (array[index1] > uniqueValuesArray[index2]) {
        count += 1;
      }
    }

    resultArray.push(count);
  }

  return resultArray;
}