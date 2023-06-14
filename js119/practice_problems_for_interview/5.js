// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

/*
Understand the problem:
Input: string
Output: string of length one
Rules:
Return the character in the input string that occurs
the least often. If there is a tie, return the first
such character.
The character can be a space or any character.
Ignore case.
*/

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".

/*
Data structure: object to count the occurrence
of each character in the string.
*/

/*
Algorithm:
1. Declare an empty object to populate with
key-values pairs whose keys are the unique
characters in the input string and whose
values are the number of occurrences.
2. Convert the string to lowercase.
3. Iterate through the string.
  1. If the character is an object property
  of the object, increment the count.
  2. Else, add that object property to the
  object with a count of 1.
4. Declare an empty result object with the first
key-value pair from the occurrences object.
5. Add the first key-value pair from the
occurrences object to the result object.
6. Iterate through the occurrences object
starting with the second key-value pair.
  1. If the value is less than the current value
in the result object, replace that key-value pair
with the current one.
7. Return the key from the result object.
*/

function leastCommonChar(string) {
  let occurrences = {};

  let newString = string.toLowerCase();

  for (let index = 0; index < newString.length; index += 1) {
    occurrences[newString[index]] = (occurrences[newString[index]] || 0) + 1;
  }

  let result = {};

  result[newString[0]] = occurrences[newString[0]];

  for (let property in occurrences) {
    if (occurrences[property] < Object.values(result)[0]) {
      result = {[property]: occurrences[property]};
    }
  }

  return Object.keys(result)[0];
}