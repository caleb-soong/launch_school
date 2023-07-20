/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

//write a function that removes every other element from an array

Input:


Output:


Rules:


Examples:
*/
console.log(removeEveryOther([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
/*
Data structure:


Algorithm:

*/
function removeEveryOther(array) {
  return array.filter((_, index) => index % 2 === 0);
}