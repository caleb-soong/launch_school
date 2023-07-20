/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

//reverse an array without using the built-in Array.prototype.reverse method

Input:


Output:


Rules:


Examples:
*/
console.log(reverse(['a', 'b', 'c']));
/*
Data structure:


Algorithm:

*/

function reverse (array) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.unshift(array[index]);
  }

  return result;
}