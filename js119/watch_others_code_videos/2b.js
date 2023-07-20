/*
Write a function scramble(str1, str2) that returns true if a portion of str1
characters can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z).
No punctuation or digits will be included.

(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
two strings

Output:
boolean

Rules:
the second strings must have length less than or equal to first string length
in other words, the characters from the second string must be contained in the
first string

Examples:
*/
console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true); // true
console.log(scramble('katas', 'steak') === false); // true
console.log(scramble('scriptjava', 'javascript') === true); // true
console.log(scramble('scriptingjava', 'javascript') === true); // true
/*
Data structure:
Convert first string to an array so that letters can be removed from it

Algorithm:
1. if the first string has as length less than the second string, return false
2. Split the first string into an array of letters
3. Iterate through the second string.
  1. If the current character is in the array, remove it from the array,
  else return false
4. return true
*/

function scramble(string1, string2) {
  if (string1.length < string2.length) return false;

  let array1 = string1.split('');

  for (let index = 0; index < string2.length; index += 1) {
    if (array1.includes(string2[index])) {
      array1.splice(array1.indexOf(string2[index]), 1);
    } else {
      return false;
    }
  }

  return true;
}