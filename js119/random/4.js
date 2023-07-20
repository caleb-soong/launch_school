/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

//Reverse a string using only the reduce method

Input:
string

Output:
string of length equal to length of input string

Rules:
use reduce, not reverse

Examples:
*/
console.log(reduceReverse('abcdefg'));
/*
Data structure:
reduce is an array method

Algorithm:

*/

function reduceReverse(string) {
  return string.split('').reduce((sum, value) => value + sum, '');
}