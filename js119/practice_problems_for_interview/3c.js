/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

Input:
string of words of letters

Output:
string of same length

Rules:
multiple letters in a word will need to be uppercased
if the word is long enough

Examples:
*/
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
/*
Data structure:


parent function Algorithm:
1. convert string to array of words
2. map array so that every second word changes
3. join array to string and return it

helper function algorithm: (accepts word)
1. convert string to array of letters
2. map array so that every fourth letter changes
3. join array to string and return it

*/

function toWeirdCase(sentence) {
  let wordsArray = sentence.split(' ');

  let weirdWordsArray = wordsArray.map((word, index) => {
    if (index % 2 === 1) {
      return changeWord(word);
    } else {
      return word;
    }
  });

  return weirdWordsArray.join(' ');
}

function changeWord(word) {
  let lettersArray = word.split('');

  let changedLettersArray = lettersArray.map((letter, index) => {
    if ((index + 1) % 4 === 0) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  });

  return changedLettersArray.join('');
}