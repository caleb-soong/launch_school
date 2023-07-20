/*
Input:
array (or not an array)
Output:
new array (or undefined)
Rules:
Don't mutate the input array.
Move the first element to the end of the array.
(Array length stays the same).
Examples:
*/
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
/*
Data structure:
Arrays
(Array elements can be objects)
Algorithm:
1. If the input is not an array, return undefined.
2. If the array length is less than 2, return the input.
3. Create a copy of the array.
4. Remove the first element from the copy.
5. Add that element to the end of the array.
6. Return the mutated array copy.
*/

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length < 2) {
    return array;
  }

  let arrayCopy = array.slice();

  let firstElement = arrayCopy.shift();

  arrayCopy.push(firstElement);

  return arrayCopy;
}