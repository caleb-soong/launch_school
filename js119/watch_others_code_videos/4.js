/*
Given an array of strings made only from lowercase letters,
return an array of all characters that show up in all strings
within the given array (including duplicates).
For example, if a character occurs 3 times in all strings but not 4 times,
you need to include that character three times in the final answer.

P:
Input: array of strings
Output: array of strings of single characters (lengths of strings equal one)
When a character appears multiple times in all strings in the input array,
then it will appear multiple times in the result array as separate elements.
An empty array should be returned if there are no common characters.

E:
The strings in the input array can be single characters.

D:
Arrays and strings. I may need to use an object to record the
frequency of characters in a string.

A:
*/

function commonBetweenTwo(word1, word2) {
  let commonChars = [];
  let word2Clone = word2.slice(0);

  for (let w1Idx = 0; w1Idx < word1.length; w1Idx += 1) {
    let char1 = word1[w1Idx];

    for (let w2Idx = 0; w2Idx < word2.length; w2Idx += 1) {
      let char2 = word2[w2Idx];

      if (char1 === char2) {
        let charIndexInClone = word2Clone.indexOf(char2);

        if (charIndexInClone !== -1) {
          commonChars.push(char1);
          word2Clone.splice(charIndexInClone, 1);
          break;
        }
      }
    }
  }

  return commonChars;
}

function commonChars(strings) {
  let commonChars = strings[0];

  for (let idx = 1; idx < strings.length; idx += 1) {
    commonChars = commonBetweenTwo(commonChars, strings[idx].split(''));
  }

  return commonChars;
}

console.log(commonChars(['a', 'b'])); // []
console.log(commonChars(['ab', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []