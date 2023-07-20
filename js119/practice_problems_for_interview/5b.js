/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

Input:
string

Output:
strin with length 1

Rules:
ignore case when counting characters
in the event of a tie, return the character that appears
earliest in the input string

Examples:
*/
console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');
/*
Data structure:
object to count the occurrences

Algorithm:
1. Create lowercase version of string.
2. Create empty object to count occurrences.
3. Iterate through lowercase string.
  1. If current character exists as an object property,
  increment the value.
  Else, add that character as an object property with
  a value of 1.
4. Create an array of subarrays from the object.
5. Sort that array by lowest second element in each subarray.
6. Return the first element of the first subarray.
*/

function leastCommonChar(string) {
  let lowerString = string.toLowerCase();

  let count = {};

  for (let index = 0; index < lowerString.length; index += 1) {
    count[lowerString[index]] = (count[lowerString[index]] || 0) + 1;
  }

  let countArray = Object.entries(count);

  let sortedCountArray = countArray.sort((a, b) => (a[1] - b[1]));

  return sortedCountArray[0][0];
}