/* eslint-disable max-lines-per-function */
/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

//Shift all the vowels in a string N letters later in the alphabet

Input:
string, number

Output:
string of same length as that of input string but with
vowels shifted a fixed number of letters later in the alphabet

Rules:
I assume the alphabet wraps back around such that if "z" shifts
one letter to the right, it becomes "a"
I assume I should retain case and consider lowercase and uppercase
alphabets to be separate
I assume the vowels that shift may or may not end up as vowels
after shifting

Examples:
*/
console.log(shiftVowels("Launch School", 0));
console.log(shiftVowels("Launch School", 1));
console.log(shiftVowels("Launch School", 25));
/*
Data structure:


Algorithm:
1. Initialize an empty result string.
2. Iterate through the input string.
  1. If the current character is a vowel, add a different
  letter to the result string.***
  Else, add the same character to the result string.
3. Return the result string.

***If char code + N is a letter of same case, then add N to char code.
Else, add N - some multiple of 26 to char code.

*/

function shiftVowels(string, number) {
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    if ('aeiou'.includes(string[index])) {
      let charCode = string[index].charCodeAt(0);

      while ((charCode + number) > 122) {
        charCode -= 26;
      }

      result += String.fromCharCode(charCode + number);
    } else if ('AEIOU'.includes(string[index])) {
      let charCode = string[index].charCodeAt(0);

      while ((charCode + number) > 90) {
        charCode -= 26;
      }

      result += String.fromCharCode(charCode + number);
    } else {
      result += string[index];
    }
  }

  return result;
}