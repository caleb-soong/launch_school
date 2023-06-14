/* eslint-disable max-len */
/*
You are going to be given an array of integers. Your job is to take that array
and find an index N where the sum of the integers to the left of N is equal to
the sum of the integers to the right of N. If there is no index that would
make this happen, return -1.

For example:
Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
Your function will return the index 3, because at the 3rd position of the
array, the sum of left side of the index [1, 2, 3] and the sum of the right
side of the index [3, 2, 1] both equal 6.

Another one:
You are given the array [20, 10, -80, 10, 10, 15, 35]
At index 0 the left side is []
The right side is [10, -80, 10, 10, 15, 35]
They are both equal to 0 when added.
(Empty arrays are equal to 0 in this problem).
Index 0 is the place where the left side and right side are equal.

P:
Input: array of integers
Output: integer corresponding to index position of
a certain array element or -1 if no array element
meets condition
Rules: The correct array element can be the first or last since
empty arrays are considered equal to 0.
The element at the correct index is not included in the sum
of either side of the array.

E:

D:
arrays and numbers (integers)

A:
1. Add all elements except the first.
If the sum is zero, return index 0.

2. Add all elements except the last.
If the sum is zero, return the last index.

3. Loop through the array from left to right and at each
index position starting with 1 and going to the second to
last element, check the sums of the elements
to the left and right using reduce and slice.

4. Return -1 at the end of iteration if no correct element/index
was found.
*/

function findEvenIndex(array) {
  if (array.slice(1).reduce((sum, value) => sum + value, 0) === 0) {
    return 0;
  }
  if (array.slice(0, array.length - 1).reduce((sum, value) => sum + value, 0) === 0) {
    return array.length - 1;
  }
  for (let index = 1; index < array.length - 1; index += 1) {
    if (array.slice(0, index).reduce((sum, value) => sum + value, 0)
    === array.slice(index + 1, array.length).reduce((sum, value) => sum + value, 0)) {
      return index;
    }
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true