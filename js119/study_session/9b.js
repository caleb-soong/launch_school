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
[c, e, a, r] 4 removed
[a, c, e, r] 6 removed
10 total removed

Algorithm:
1. convert strings to arrays
2. filters arrays for characters in the other array
3. return the differences in the array before and after
filtering plus the differences in length of the filtered
arrays (duplicate characters)
*/

function anagramDifference(string1, string2) {
  let array1 = string1.split('');
  let array2 = string2.split('');

  let filteredArray1 = array1.filter(letter => array2.includes(letter));
  let filteredArray2 = array2.filter(letter => array1.includes(letter));

  return (array1.length - filteredArray1.length) +
  (array2.length - filteredArray2.length) +
  Math.abs(filteredArray1.length - filteredArray2.length);
}