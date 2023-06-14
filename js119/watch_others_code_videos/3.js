/*
Given a non-empty string, check if it can be constructed
by taking a substring of it and appending multiple copies
of the substring together. You may assume the given string
consists of lowercase English letters only.

Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

Example 2:
Input: "aba"
Output: False

P:
Input: string
Output: boolean
Return true if any substring of the input string can form the input by
concatenating to itself any number of times. Otherwise, return false.
The length of the string divided by the number of unique characters
must equal the number of unique characters in the substring.

E:
'aabb' should return false because 'ab' concatenated to itself would
have the same four characters but in the wrong order.
'abcabcabc' should return true despite having an odd length.

D:
The input string may need to be converted to an array.

A:
1. Take a substring of length 1 from the input string.
2. If the length of the substring is greater than half
the length of the input string, return false.
3. Concatenate to itself n - 1 times where n is equal to
the length of the input string divided by the length of
the substring.
If the result is equal to the input string, return true.
Else, go back to step 1 and take a substring of length one
greater than the previous substring.
*/

function repeatedSubstringPattern(string) {
  for (let index = 0; index < string.length; index += 1) {
    let substring = string.slice(0, index + 1);
    if (substring.length > string.length / 2) {
      return false;
    }
    substring = substring.repeat(string.length / substring.length);
    if (substring === string) {
      return true;
    }
  }
}

console.log(repeatedSubstringPattern("abab") === true); // true
console.log(repeatedSubstringPattern("aba") === false); // true
console.log(repeatedSubstringPattern("aabaaba") === false); // true
console.log(repeatedSubstringPattern("abaababaab") === true); // true
console.log(repeatedSubstringPattern("abcabcabcabc") === true); // true
console.log(repeatedSubstringPattern("aabb") === false); // true
console.log(repeatedSubstringPattern("abcabcabc") === true); // true
console.log(repeatedSubstringPattern("aaaaa") === true); // true