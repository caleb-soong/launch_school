/* eslint-disable max-len */
/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// Find the length of the longest substring
// in the given string that is a palindrome.

// As an example, if the input was "I like racecars that go fast",
// the substring's ("racecar") length would be 7.

// If the length of the input string is 0, the return value must be 0.

Input:
string

Output:
number that is the length of the largest substring from the input
string that is also a palindrome

Rules:
If the length of the input string is 0, the return value must be 0.
A palindrome can have length 1

Examples:
*/
console.log(longestPalindrome("a") === 1);
console.log(longestPalindrome("aa") === 2);
console.log(longestPalindrome("baa") === 2);
console.log(longestPalindrome("aab") === 2);
console.log(longestPalindrome("baabcd") === 4);
console.log(longestPalindrome("baablkj12345432133d") === 9);
/*
Data structure:
strings only

Algorithm:
1. If the input string length is less than 2,
return the input string length
2. Iterate through the input string.
(substring will have length equal to input string and decrement)
  1. Iterate though the input string.
  (first character will begin at index 0 and increment)
    1. If the substring is a palindrome,
    return length of substring.

*/

function isPalidrome(string) {
  return string.split('').reverse().join('') === string;
}

function longestPalindrome(string) {
  if (string.length < 2) {
    return string.length;
  }

  for (let subLength = string.length; subLength >= 1; subLength -= 1) {
    for (let startIndex = 0; startIndex <= string.length - subLength; startIndex += 1) {
      if (isPalidrome(string.slice(startIndex, startIndex + subLength))) {
        return subLength;
      }
    }
  }
}