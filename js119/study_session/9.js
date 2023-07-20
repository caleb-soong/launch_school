/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
two strings of 0 or more lowercase letters

Output:
minimum sum of the letters removed from the strings to make them anagrams

Rules:
empty strings are considered anagrams (return 0)

Examples:
*/
console.log(anagramDifference("", "")); // 0
console.log(anagramDifference("a", "")); // 1
console.log(anagramDifference("", "a")); // 1
console.log(anagramDifference("ab", "a")); // 1
console.log(anagramDifference("ab", "cd")); // 4
console.log(anagramDifference("aab", "a")); // 2
console.log(anagramDifference("a", "aab")); // 2
console.log(anagramDifference("codewars", "hackerrank")); // 10
/*
Data structure:
two arrays, one for each input string, to be filtered
for non-common characters

Algorithm:
1. Convert the input strings to arrays.
2. Iterate through the first string.
  1. If the current character is not in the second string,
  remove that character from the first array.
3. Iterate through the second string.
  1. If the current character is not in the first string,
  remove that character from the second array.
4. Return the sum of the differences between the string lengths
and their corresponding array lengths and the absolute value
of the difference between the arrays lengths.
*/

function anagramDifference(string1, string2) {
  let array1 = string1.split('');
  let array2 = string2.split('');

  for (let index = 0; index < string1.length; index += 1) {
    if (!string2.includes(string1[index])) {
      array1.splice(array1.indexOf(string1[index]), 1);
    }
  }

  for (let index = 0; index < string2.length; index += 1) {
    if (!string1.includes(string2[index])) {
      array2.splice(array2.indexOf(string2[index]), 1);
    }
  }

  return (string1.length - array1.length) + (string2.length - array2.length) +
  Math.abs(array1.length - array2.length);
}