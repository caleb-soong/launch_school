/*
Write a function to find the longest common prefix string
amongst an array of strings.
If there is no common prefix, return an empty string ''.

Example 1:
Input: ['flower', 'flow', 'flight']
Output: 'fl'

Example 2:
Input: ['dog', 'racecar', 'car']
Output: ''
Explanation: There is no common prefix among the input strings.

All given inputs are in lowercase letters a-z.

P:
Input: array of strings (words with lowercase letters)
Ouput: a string with the longest common prefix or empty string

E:
The prefix must be common to all strings, not just multiple strings.
Strings can be same lengths or different lengths.
If the strings are the same, then the prefix is the entire string.

D:
Arrays, strings, booleans.

A:
1. Declare an empty result string.
2. Sort the array elements by length.
3. Iterate through the characters of the strings
up to the length of the shortest string.
If the strings begin with the same character,
add it to the result string and continue iteration.
Else, go to step 4.
4. Return the result string.
*/

function commonPrefix(array) {
  let result = '';
  array.sort((a, b) => a.length - b.length);
  for (let charIndex = 0; charIndex < array[0].length; charIndex += 1) {
    if (array.every(word => word[charIndex] === array[0][charIndex])) {
      result += array[0][charIndex];
    } else {
      break;
    }
  }
  return result;
}

console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'); // true
console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true