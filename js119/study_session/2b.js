/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// Given two arrays, return whether the two arrays are opposites of each other.
// That means both arrays are comprised only from elements a and b and the
// occurrences of these elements are swapped between the two arrays.

Input:
two arrays

Output:
boolean

Rules:
arrays must have the same length and must have at least two elements
the elements in each array at corresponding indices must be different
only two elements may be present in either array.

Examples:
*/
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])); // true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])); // true
console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14])); // false
console.log(isAntiArray([3.14, true, 3.14], [true, "3.14", true])); // false
console.log(isAntiArray([], [])); // false
console.log(isAntiArray([3.14], [3.14])); // false
console.log(isAntiArray([3.14], [false])); // false
console.log(isAntiArray([3.14, false, 3.14], [false, 3.14, true])); // false
console.log(isAntiArray([3.14, true], [3.14])); // false
/*
Data structure:


Algorithm:
1. if arrays lengths are different, return false
2. if either array lenghth is less than 2, return false
3. sort the first (or second) array
4. Initialize variables to the first and last elements
of the sorted array.
5. If those variables are the same, return false.
6. Iterate through either input array length.
  1. If corresponding values are the same, return false.
  2. If any value is not one of the two values, return false.
7. return true

*/

function isAntiArray(array1, array2) {
  if (array1.length !== array2.length) return false;

  if (array1.length < 2 || array2.length < 2) return false;

  let sortedArray1 = array1.slice().sort();

  let first = sortedArray1[0];
  let second = sortedArray1[sortedArray1.length - 1];

  if (first === second) return false;

  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] === array2[index]) return false;

    if (array1[index] !== first && array1[index] !== second) return false;
    if (array2[index] !== first && array2[index] !== second) return false;
  }

  return true;
}