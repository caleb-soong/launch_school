/*
P: input and output are distinct arrays
need new array with same elements from the original array in a different order.
E: non-array should return undefined and [] should return []
D: arrays
A: create an empty array, iterate through input array starting with second
element and pushing elements, then pushing the first element.
also need to check argument for non-array and empty array
*/

function rotateArray(array) {
  let result = [];
  if (!Array.isArray(array)) {
    return undefined;
  }
  if (array.length === 0) {
    return [];
  } else {
    for (let index = 1; index < array.length; index += 1) {
      result.push(array[index]);
    }
    result.push(array[0]);
  }
  return result;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
console.log(rotateArray([]));

console.log(rotateArray());
console.log(rotateArray(1));

let array = [1, 2, 3, 4];
console.log(rotateArray(array));
console.log(array);