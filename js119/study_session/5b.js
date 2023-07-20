/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// You are given an array of strings and an integer `k`.
// Your task is to return the first longest string consisting of
// `k` consecutive strings taken from the array.

// Example:

// longestConsec(
// ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return ""

Input:
array of strings and an integer k

Output:
first (leftmost, in case of a tie) longest string consisting of k
consecutive string taken from the array

Rules:
if input array is empty, return ''
if k is greater than array length, return ''
if k is less than 1, return ''

elements forming return string must be consecutive elements
in the event of a tie, return the first occurring string that meets conditions

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


Algorithm:
1. if input array is empty, return ''
2. if k is less than 1, return ''
3. if k is greater than array length, return ''
4. initialize an empty result array
5. iterate through the input array
  1. add each string of k consecutive strings
  from the input array to the result array.
6. initialize an empty result string to the
first value of the result array.
7. iterate through the result array.
  1. if the current element has a greater length
  than the result string, reassign result string.
8. return result string.
*/

function longestConsec(array, integer) {
  if (array.length < 1) return '';

  if (integer < 1) return '';

  if (array.length < integer) return '';

  let resultArray = [];

  for (let startIndex = 0; startIndex <= array.length - integer;
    startIndex += 1) {
    resultArray.push(array.slice(startIndex, startIndex + integer).join(''));
  }

  let resultString = resultArray[0];

  for (let index = 1; index < resultArray.length; index += 1) {
    if (resultString.length < resultArray[index].length) {
      resultString = resultArray[index];
    }
  }

  return resultString;
}

/*
function longestConsec(array, integer) {
  if (array.length < 1) return '';

  if (integer < 1) return '';

  if (array.length < integer) return '';

  let resultArray = [];

  for (let startIndex = 0; startIndex <= array.length - integer;
    startIndex += 1) {
    resultArray.push(array.slice(startIndex, startIndex + integer).join(''));
  }

  let sortedArray = resultArray.sort((a, b) => b.length - a.length);

  return sortedArray[0];
}
*/