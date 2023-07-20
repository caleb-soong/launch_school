/*
Given a non-empty string, check if it can be constructed
by taking a substring of it and appending multiple copies
of the substring together. You may assume the given string
consists of lowercase English letters only.

/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
string

Output:
boolean

Rules:
the substring can be a single character (per last test case)
the substring must have length less than the length of the input string
the substring must begin at the first letter of the input string

Examples:
Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

Example 2:
Input: "aba"
Output: False
*/
console.log(repeatedSubstringPattern("abab") === true); // true
console.log(repeatedSubstringPattern("aba") === false); // true
console.log(repeatedSubstringPattern("aabaaba") === false); // true
console.log(repeatedSubstringPattern("abaababaab") === true); // true
console.log(repeatedSubstringPattern("abcabcabcabc") === true); // true
console.log(repeatedSubstringPattern("aabb") === false); // true
console.log(repeatedSubstringPattern("abcabcabc") === true); // true
console.log(repeatedSubstringPattern("aaaaa") === true); // true
/*
Data structure:
strings

Algorithm:
1. Iterate through the input string.
  1. Assign the substring to a substring that starts with length 1
  and increases on each iteration.
  2. If the substring of length 1 repeated (input string length
  divided by substring length) times is equal to the input string,
  return true.
2. Return false.
*/

function repeatedSubstringPattern(inputString) {
  for (let index = 1; index < inputString.length; index += 1) {
    let substring = inputString.slice(0, index);

    if (substring.repeat(inputString.length / substring.length)
    === inputString) {
      return true;
    }
  }

  return false;
}