/* eslint-disable max-lines-per-function */
/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Given an array of strings strs, group the anagrams together. You can return the
answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different
word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

Input:
array of one or more strings

Output:
array of one or more subarrays of strings
the elements of each subarray are
anagrams of each other

Rules:
input array cannot be empty, although it could contain one element
  that is an empty string
input array length cannot exceed 104
no array element can have a length greater than 100
lowercase letters only
the order of the subarrays doesn't matter
the sum of all subarray element is equal to the length
of the input array (all strings are an anagram of another word
  or of itself)

Examples:
*/
console.log(anagram(["eat","tea","tan","ate","nat","bat"]));
console.log(anagram([""]));
console.log(anagram(["a"]));
/*
Data structure:


Algorithm:
1. initialize an empty result array.
2. create a copy of the array.
3. iterate over the array.
  1. if element is in array copy,
    1. Initialize a subarray
    2. add it to the subarray
    3. remove it from array copy.
    4. iterate over array elements.
      1. if element is anagram and is in
      array copy,
        1. add it to subarray
        2. remove it from array copy
    5. add subarray to result array.
4. return result array.
*/

function anagram(array) {
  let resultArray = [];

  let arrayCopy = array.slice();

  for (let outerIndex = 0; outerIndex < array.length; outerIndex += 1) {
    if (arrayCopy.includes(array[outerIndex])) {
      let subarray = [];

      subarray.push(array[outerIndex]);

      arrayCopy.splice(arrayCopy.indexOf(array[outerIndex]), 1);

      for (let innerIndex = 0; innerIndex < array.length; innerIndex += 1) {
        if (array[outerIndex].split('').sort().join('')
        === array[innerIndex].split('').sort().join('')
        && arrayCopy.includes(array[innerIndex])) {
          subarray.push(array[innerIndex]);

          arrayCopy.splice(arrayCopy.indexOf(array[innerIndex]), 1);
        }
      }

      resultArray.push(subarray);
    }
  }

  return resultArray;
}