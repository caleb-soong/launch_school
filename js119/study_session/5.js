/* eslint-disable max-lines-per-function */
// 1
// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of `k` consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
an array of strings and an integer

Output:
a string

Rules:
return first (in the case of a tie) longest string consisting of k
consecutive strings from the array
if input array is empty, return empty string
if k is greater than number of elements in input, return empty string
if k is less than 1, return empty string

Examples:
*/
// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
/*
Data structure:
I want to make a new array to contain all strings of k
consecutive strings

Algorithm:
1. if input array is empty, return empty string
2. if k is greater than number of elements in input, return empty string
3. if k is less than 1, return empty string
4. Initialize an empty result array to contain
all strings of k consecutive strings
5. Iterate through the input array.
  1. Push the strings of k consecutive strings to the result array.
6. Initialize a result string to the first string in the array of strings
of k consecutive strings.
7. Iterate through that array starting with second element
  1. If the length of the current element has greater length,
  reassign result string to that element.
8. Return the result string.
*/

function longestConsec(inputArray, integer) {
  if (inputArray.length < 1) {
    return '';
  }

  if (inputArray.length < integer) {
    return '';
  }

  if (integer < 1) {
    return '';
  }

  let consecStringsArray = [];

  for (let index = 0; index < inputArray.length - integer + 1; index += 1) {
    consecStringsArray.push(inputArray.slice(index, index + integer).join(''));
  }

  let resultString = consecStringsArray[0];

  for (let index = 1; index < inputArray.length; index += 1) {
    if (String(consecStringsArray[index]).length > resultString.length) {
      resultString = consecStringsArray[index];
    }
  }

  return resultString;
}