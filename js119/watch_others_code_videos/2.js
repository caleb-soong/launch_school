/*
Write a function scramble(str1, str2) that returns true if a portion of str1
characters can be rearranged to match str2, otherwise returns false.

For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true.
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
str1 is 'katas' and str2 is 'steak' should return false.

Only lower case letters will be used (a-z).
No punctuation or digits will be included.

P: Inputs are two strings; output is a boolean
The function returns true if the second string can be formed by an
arrangement of some or all of the characters in the first string.
So, the first string can contain characters not in the second string.
But, the second string cannot contain characters not in the first string.

E: The first string cannot have a length less than the second string.
(I'm unsure about empty strings.)

D: Strings may need to become arrays of characters in order to sort them.

A:
1. If the first string is shorter than the second string, return false.
2. Convert inputs to arrays.
3. Iterate through the second array.
If the current array element is found in the first array, remove it
from the first array and go to next iteration.
Else, return false.
4. Return true.
*/

function scramble(str1, str2) {
  if (str1.length < str2.length) return false;
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  for (let index = 0; index < arr2.length; index += 1) {
    if (arr1.includes(arr2[index])) {
      arr1.splice(arr1.indexOf(arr2[index]), 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(scramble('javaass', 'jjss') === false); // true
console.log(scramble('rkqodlw', 'world') === true); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true); // true
console.log(scramble('katas', 'steak') === false); // true
console.log(scramble('scriptjava', 'javascript') === true); // true
console.log(scramble('scriptingjava', 'javascript') === true); // true