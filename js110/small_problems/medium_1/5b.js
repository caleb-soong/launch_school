/*

(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
string

Output:
string with number words replaced with
corresponding digits

Rules:


Examples:
*/
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
/*
Data structure:
array to store the number words

Algorithm:

*/

function wordToDigit(string) {
  let numberWordsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let index = 0; index < numberWordsArray.length; index += 1) {
    string = string.replaceAll(numberWordsArray[index], index);
  }

  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));