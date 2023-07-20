/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Given 2 strings, your job is to find out if there is a substring
that appears in both strings. You will return true if you find a
substring that appears in both strings, or false if you do not.
We only care about substrings that are longer than one letter long.

Input:
two strings

Output:
boolean

Rules:
either or both strings can be empty (in which case return false)
a substring here is defined as two (or more) characters
ignore case

Examples:
*/
console.log(substringTest('Something', 'Home') === true); // true
console.log(substringTest('Something', 'Fun') === false); // true
console.log(substringTest('Something', '') === false); // true
console.log(substringTest('', 'Something') === false); // true
console.log(substringTest('BANANA', 'banana') === true); // true
console.log(substringTest('test', 'lllt') === false); // true
console.log(substringTest('', '') === false); // true
console.log(substringTest('1234567', '541265') === true); // true
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true); // true
/*
Data structure:


Algorithm:
1. If either string has length less than two, return false.
2. Determine the shorter and longer string.
3. Iterate over the shorter string.
  1. If the substring of the shorter defined as the
  current element concatenated with the next string is present
  in the longer string, return true.
4. Return false.
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

  for (let index = 0; index < shortString.length - 1; index += 1) {
    if (longString.includes(shortString.slice(index, index + 2))) {
      return true;
    }
  }

  return false;
}