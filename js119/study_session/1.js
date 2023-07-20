// 1
// Find the length of the longest substring
// in the given string that is a palindrome.

// As an example, if the input was "I like racecars that go fast",
// the substring's ("racecar") length would be 7.

// If the length of the input string is 0, the return value must be 0.

/*
Understand the problem:
Input: string
Output: a number representing the length of the longest substring
that is a palindrome.
Rules:
An empty string should return 0.
The palindrome (substring) can be the entire input string.
The palindrome can be contained anywhere in the input string.
It seems there are only lowercase letters and digits.
If the reverse of a substring is the same substring,
then it is a palindrome.
*/

// Examples:
console.log(longestPalindrome("a") === 1);
console.log(longestPalindrome("aa") === 2);
console.log(longestPalindrome("baa") === 2);
console.log(longestPalindrome("aab") === 2);
console.log(longestPalindrome("baabcd") === 4);
console.log(longestPalindrome("baablkj12345432133d") === 9);

//Data structure: I may want to use arrays to reverse substrings
//to test if they are palindromes.

/*
Test case:
// console.log(longestPalindrome("baablkj12345432133d") === 9);
*/

/*
Algorithm:
1. Initialize empty array.
2. Declare outer loop. Iterate through input string
incrementing the starting index of the substring.
  1. Declare inner loop. Iterate through input string
  incrementing length of the substring.
    1. If substring is a palindrome, add to array.
3. Sort the palindromes by descending length.
4. Return the longest (first).
*/

function longestPalindrome(string) {
  if (string.length < 2) {
    return string.length;
  }

  let palindromes = [];

  for (let index = 0; index < string.length - 1; index += 1) {
    for (let length = 1; length <= string.length - index; length += 1) {
      let substring = string.slice(index, index + length);

      if (substring.split('').reverse().join('') === substring) {
        palindromes.push(substring);
      }
    }
  }

  palindromes.sort((a, b) => b.length - a.length);

  return palindromes[0].length;
}