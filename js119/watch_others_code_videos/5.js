/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*
Given 2 strings, your job is to find out if there is a substring
that appears in both strings. You will return true if you find a
substring that appears in both strings, or false if you do not.
We only care about substrings that are longer than one letter long.

P:
Inputs are two strings.
Output is a boolean.

E:
Case-insensitive
Empty strings are permitted inputs
Characters in strings can include digits.
Strings can have different lengths.
If lengths are different, the first or second could be greater.

D:
Strings, booleans, possibly turn strings to arrays?

A:
1. If either input has length less than 2, return false.
2. Convert both input strings to lowercase.
3. Search for a substring of the shorter string in the longer string.
  If lengths are equal, then it doesn't matter which is named which.
4. Take a substring of length 2 from index position 0 of the shorter
string and search for it in the longer string.
If found, return true.
Else,
  If index of substring is less than string length minus substring length,
  increment the index and return to step 3.
  Else,
    If substring length is less than string length,
    increment substring length and return to step 3.
    Else, return false.
*/

function substringTest(string1, string2) {
  if (string1.length < 2 || string2.length < 2) {
    return false;
  }

  let shortString;
  let longString;

  if (string1.length <= string2.length) {
    shortString = string1.toLowerCase();
    longString = string2.toLowerCase();
  } else {
    shortString = string2.toLowerCase();
    longString = string1.toLowerCase();
  }

  for (let substringLength = 2; substringLength < shortString.length; substringLength += 1) {
    for (let startingIndex = 0; startingIndex < shortString.length - substringLength; startingIndex += 1) {
      if (longString.includes(shortString.slice(startingIndex, substringLength))) {
        return true;
      }
    }
  }

  return false;
}

console.log(substringTest('Something', 'Home') === true); // true
console.log(substringTest('Something', 'Fun') === false); // true
console.log(substringTest('Something', '') === false); // true
console.log(substringTest('', 'Something') === false); // true
console.log(substringTest('BANANA', 'banana') === true); // true
console.log(substringTest('test', 'lllt') === false); // true
console.log(substringTest('', '') === false); // true
console.log(substringTest('1234567', '541265') === true); // true
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true); // true