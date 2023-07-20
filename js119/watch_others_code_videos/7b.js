/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

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

Input:
an array of integers

Output:
integer (index of input array element or -1)

Rules:
the index could be the index of the first or last element if all
other elements sum to zero. In other words, the sum to the left of the
first element is considered zero and the sum to the right of the last
element is also considered zero.
input array elements can be negative (probably zero too)

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
1. Iterate through the array.
  1. If the sum of array elements to the left of the current element is
  equal to the sum of array element to the right of the curremnt element,
  return the index of the current element
2. Return -1.

*/
function findEvenIndex(array) {
  for (let index = 0; index < array.length; index += 1) {
    let leftSide = array.slice(0, index);
    let rightSide = array.slice(index + 1);

    if (leftSide.reduce((sum, value) => sum + value, 0)
    === rightSide.reduce((sum, value) => sum + value, 0)) {
      return index;
    }
  }

  return -1;
}