/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
string

Output:
string of same length but modified

Rules:
convert every 4th letter of every 2nd word to uppercase
long words can have multiple letters converted

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
/*
Data structure:
array of words
array of characters in a word

Algorithm (helper function)
Input: string
Output: string
1. Convert string to array of characters
2. Change every fourth character to uppercase.
3. Convert array to string.
4. Return string.

Algorithm:
1. Convert string to array of words.
2. Iterate through array.
3. Pass every other word to helper function.
4. Convert array to string.
5. Return string.
*/

function changeCase(word) {
  let lettersArray = word.split('');

  let newLettersArray = lettersArray.map((letter, index) => {
    if ((index + 1) % 4 === 0) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  });

  let newWord = newLettersArray.join('');

  return newWord;
}

function toWeirdCase(sentence) {
  let wordsArray = sentence.split(' ');

  let newWordsArray = wordsArray.map((word, index) => {
    if (index % 2 === 1) {
      return changeCase(word);
    } else {
      return word;
    }
  });

  let newSentence = newWordsArray.join(' ');

  return newSentence;
}