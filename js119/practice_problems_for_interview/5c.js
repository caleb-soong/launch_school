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
string of length one

Rules:
any character is eligble including spaces
in the event of a tie, return first such character

Examples:
*/
console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".
/*
Data structure:


Algorithm:
1. convert string to lowercase
2. initialize an empty count object
3. iterate over the lowercase string
  1. if the character exists as an object property,
  increment the value by 1
  else, add the object property and set value to 1
4. initialize result string to first character of
lowercase string
5. iterate over the lowercase string
  1. if the current character appears fewer times
  in the lowercase string, reassign the result string
6. return the result string
*/

function leastCommonChar(string) {
  let lowercase = string.toLowerCase();

  let count = {};

  for (let index = 0; index < lowercase.length; index += 1) {
    count[lowercase[index]] = (count[lowercase[index]] || 0) + 1;
  }

  let result = lowercase[0];

  for (let index = 1; index < lowercase.length; index += 1) {
    if (count[result] > count[lowercase[index]]) {
      result = lowercase[index];
    }
  }

  return result;
}