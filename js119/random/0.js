/*
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

P: Input: an array of one or more elements (up to 104), all of which are strings
Output: an array of arrays.
The elements of the subarrays are the elements of the input array (strings)
The elements of the input array are grouped together by their characters
(letters) to determine the subarrays of the output.
No word can exceed 100 characters in length.
Letters are lowercase only.
An anagram of a word is a permutation of the letters of that word
that form another word. A word can have multiple anagrams.
The function does not generate anagrams.
Rather, it groups existing anagrams together.
If word x is an anagram of word y, then word y is an anagram of word x.

E: The input cannot be an empty array.
But if the input array contains a single element, then it will be
"grouped" with itself and returned as an subarray in the output.

["eat","tea","tan","ate","nat","bat"] =>
[["bat"],["nat","tan"],["ate","eat","tea"]]
Move the first element to a subarray and
compare it to the other elements in the array.
Any anagrams will be moved from the input array to the subarray.

D: The input and output both contain strings and arrays,
and the output contains nested arrays.

["eat","tea","tan","ate","nat","bat"]

A:
1. Create a result array (to contain subarrays)
Steps 2-6 define a loop
2. If input array length is > 0,
   Create a sub array (to contain words which are anagrams of each other)
   Else, go to step 7.
3. Remove the first remaining word from the input array
and place it in the first subarray.
Steps 4-5 define a loop
4. Compare the first remaining word in the subarray to the
first remaining word in the input array.
5. If words are anagrams*, add it to the subarray and remove from input array.
   If words aren't anagrams, leave it in the input array and go back to step 4.
6. Push the subarray to the result array and go to step 2.
7. Return the result array.

*anagrams are determined by comparing sorted strings

Return the result array.

*/

function anagram(words) {
  let result = [];
  while (words.length > 0) {
    let subarray = [];
    subarray.push(words.shift());
    for (let index = 0; index < words.length; index += 1) {
      while (subarray[0].split('').sort().join('') ===
        words[index].split('').sort().join('')) {
        subarray.push(words.splice(index, 1).toString());
      }
    }
    result.push(subarray);
  }
  return result;
}

console.log(anagram(["eat","tea","tan","ate","nat","bat"]));
console.log(anagram([""]));
console.log(anagram(["a"]));