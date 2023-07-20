// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
array whose elements can be different data types

Output:
array of same length sorted in a certain way

Rules:
any elements of the number zero must be moved to the end (right) of the array
other elements must remain in place

Examples:
*/
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));// returns [false,1,1,2,1,3,"a",0,0]
/*
Data structure:
arrays

Algorithm:
1. filter the input array to remove the zeroes
2. Find the number of zeros that were filtered out
  (and need to be appended to result array)
3. initialize a count variable to 0
4. Declare a loop that runs the number of times
equal to number of zeros to append
  1. append a zero
  2. increment the count
5. return the result array
*/

function moveZeros(inputArray) {
  let resultArray = inputArray.filter(element => element !== 0);
  let zerosToAdd = inputArray.length - resultArray.length;
  let count = 0;

  while (count < zerosToAdd) {
    resultArray.push(0);
    count += 1;
  }

  return resultArray;
}
