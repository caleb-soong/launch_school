/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum
// of the integers to the left of N is equal
// to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.

Input:
array of integers

Output:
number, the index of the input array such that the sum of array
elements to the left is equal to the sum of array elements to the right

Rules:
return -1 if no such index can be found

Examples:
*/
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true
/*
Data structure:


Algorithm:
1. iterate through the array
2. if the sum of elements to the left is equal to the sum of
elements to the right, return the index
3. return -1
*/

function findEvenIndex(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array.slice(0, index).reduce((sum, value) => sum + value, 0) ===
    array.slice(index + 1).reduce((sum, value) => sum + value, 0)) {
      return index;
    }
  }

  return -1;
}