/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*

Step 1: Understand the Problem

Sort Strings by Most Adjacent Consonants

Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains.
If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other.
Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Are "y" and/or "w" always consonants?
Should the strings be sorted in ascending or descending order?
(Answer: descending, based on the test cases)

The input and ouput are both an array of strings.

Step 2: Examples and test cases

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

console.log(countMaxAdjacentConsonants('dddaa')); // 3
console.log(countMaxAdjacentConsonants('ccaa')); // 2
console.log(countMaxAdjacentConsonants('baa')); // 0
console.log(countMaxAdjacentConsonants('aa')); // 0

Step 3: Data Structures

Arrays and strings

Step 4: Algorithm

1. Iterate through the given array to each string.
  2. Iterate through the given string to each character.
    3. If the character is not a consonant, go to step 2.
    4. If the character is a consonant,
      then check if the next character is also a consonant.
      5. If no, then go to step 2.
      6. If yes, then increment a counter and go to step 4.

Step 5: Implement a Solution in Code
*/

function sortStringsByConsonants(inputArray) {
  let sortedStrings = inputArray.sort((a, b) =>
    countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a));
  return sortedStrings;
}

function countMaxAdjacentConsonants(inputString) {
  let trimmedString = inputString.trim();
  let count = 0;
  let temporaryString = '';
  for (let index = 0; index < trimmedString.length; index++) {
    if (!(trimmedString[index] === 'a' ||
        trimmedString[index] === 'e' ||
        trimmedString[index] === 'i' ||
        trimmedString[index] === 'o' ||
        trimmedString[index] === 'u')) {
      temporaryString = temporaryString.concat(trimmedString[index]);
      if (temporaryString.length > 1 && temporaryString.length > count) {
        count = temporaryString.length;
      }
    } else if (temporaryString.length > 1 && temporaryString.length > count) {
      count = temporaryString.length;
      temporaryString = '';
    }
  }
  return count;
}

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']

console.log(countMaxAdjacentConsonants('dddaa')); // 3
console.log(countMaxAdjacentConsonants('ccaa')); // 2
console.log(countMaxAdjacentConsonants('baa')); // 0
console.log(countMaxAdjacentConsonants('aa')); // 0