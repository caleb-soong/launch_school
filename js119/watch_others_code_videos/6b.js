/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Write a function to find the longest common prefix string
amongst an array of strings.
If there is no common prefix, return an empty string ''.
All given inputs are in lowercase letters a-z.

Input:
array of multiple strings of lowercase letters

Output:
string that is the longest prefix common to all strings
in the input array (could be empty string)

Rules:
input array elements can have varying lengths
input array can have varying number of elements
lowercase letters only
must return empty string if no common prefix
common prefix can presumably be a single character

Example 1:
Input: ['flower', 'flow', 'flight']
Output: 'fl'

Example 2:
Input: ['dog', 'racecar', 'car']
Output: ''
Explanation: There is no common prefix among the input strings.
*/
console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl'); // true
console.log(commonPrefix(['dog', 'racecar', 'car']) === ''); // true
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters'); // true
console.log(commonPrefix(['throne', 'dungeon']) === ''); // true
console.log(commonPrefix(['throne', 'throne']) === 'throne'); // true
/*
Data structure:


Algorithm:
1. sort the array by ascending element length
2. iterate over the first element using the entire element
as the prefix and decrementing the prefix length from the right
  1. if each array element starts with the prefix,
  return the prefix
3. Return ''
*/

function commonPrefix(array) {
  array.sort((a, b) => a.length - b.length);

  let firstWord = array[0];

  for (let lastChar = firstWord.length; lastChar >= 1; lastChar -= 1) {
    let prefix = firstWord.slice(0, lastChar);

    if (array.every(word => word.startsWith(prefix))) {
      return prefix;
    }
  }

  return '';
}