// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/*
Understand the problem:
Input: a string of words separated by single spaces
Ouput: a string of words separated by single spaces
Rules:
Every other word starting with the second word
is modified by changing the case of the four letter.
If that has fewer than four letters, then the next
word to be modified (attempted to be modified) is
the word two words after that.
It is possible for the output to be the same
as the input.
It appears the only characters are letters and
single spaces (used to separate words).
*/

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

//Data structure: input and output are both strings, but arrays may
//necessary or ideal to modifiy the correct words

/*
Algorithm:
1. Split the string into an array of words.
2. Iterate through the array elements with odd indices.
  1. Use a helper function to reassign the word.
3. Join the array to a new string.
4. Return the new string.

Helper function:
Input: string
Output: string

1. Split the string into an array of letters.
2. Iterate through every fourth letter.
  1. Reassign the letter(s) by changing its case(s).
3. Join the new array to a new string.
4. Return the new string.

*/

function toWeirdCase(inputString) {
  let inputArray = inputString.split(' ');

  for (let index = 1; index < inputArray.length; index += 2) {
    inputArray[index] = modifyWord(inputArray[index]);
  }

  let newString = inputArray.join(' ');

  return newString;
}

function modifyWord(word) {
  let wordArray = word.split('');

  for (let index = 3; index < wordArray.length; index += 4) {
    if (wordArray[index] === wordArray[index].toLowerCase()) {
      wordArray[index] = wordArray[index].toUpperCase();
    } else {
      wordArray[index] = wordArray[index].toLowerCase();
    }
  }

  let newWord = wordArray.join('');

  return newWord;
}