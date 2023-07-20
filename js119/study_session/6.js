// 2
// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum
// of the integers to the left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.

/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
array of integers

Output:
index of one of the input array elements
-1 if no input array element satisfies condition

Rules:
Per test cases, the index can be the first or the last element.
When this happens, all other array elements sum to zero.
Do not include current index in sum of either side.

Examples:
*/
//Test Cases
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
1. if all array elements except for the first add up to 0,
return 0 (index of first element)
2. if all array elements except for the last add up to 0,
return last index
3. Iterate through the array (starting with second element through
  the second to last element)
  1. If the sum of elements to the left of current element is equal to
the sum of elements to the right of current element, return index
of current element.
4. Return -1.
*/

function findEvenIndex(array) {
  if (array.slice(1).reduce((sum, value) => sum + value) === 0) {
    return 0;
  }

  if (array.slice(0, array.length - 1)
    .reduce((sum, value) => sum + value) === 0) {
    return array.length - 1;
  }

  for (let index = 1; index < array.length - 1; index += 1) {
    if (array.slice(0, index).reduce((sum, value) => sum + value) ===
    array.slice(index + 1).reduce((sum, value) => sum + value)) {
      return index;
    }
  }

  return -1;
}