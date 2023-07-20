/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

Input:
array

Output:
array of same length

Rules:
I assume only the number zero counts as a zero.

Examples:
*/
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));// returns [false,1,1,2,1,3,"a",0,0]
/*
Data structure:


Algorithm:
1. filter out the zeroes.
2. Append zeroes until the length is the same
as that of the input array
3. return filtered array
*/

function moveZeros(array) {
  let filteredArray = array.filter(element => element !== 0);

  while (filteredArray.length < array.length) {
    filteredArray.push(0);
  }

  return filteredArray;
}