/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Given an array of strings made only from lowercase letters,
return an array of all characters that show up in all strings
within the given array (including duplicates).
For example, if a character occurs 3 times in all strings but not 4 times,
you need to include that character three times in the final answer.

Input:
array of strings of lowercase letters
(two or more elements)

Output:
array whose elements are strings of single letters
that are the common letters among all of the elements
of the input array
So, output array could be empty.
Also, output could contain duplicate elements if a letter
appears multiple times in all strings.

Rules:
the strings in the input array don't have to have the same length
if there are multiple common characters, the order of appearance
in the input strings or the output array doesn't matter

Examples:
*/
console.log(commonChars(['a', 'b'])); // []
console.log(commonChars(['ab', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []
/*
Data structure:
input and output are both arrays.

Algorithm:
1. Initialize an empty result array.
2. Sort the input array by ascending length.
3. Initialize a variable to the first element of the sorted array.
4. Iterate over the characters of the first element of the sorted array.
  1. If every array element includes the current character,
    1. add that character as an element to the result array.
    2. mutate the input array to remove that character from each element.
5. Return the result array.
*/

function commonChars(inputArray) {
  let resultArray = [];

  inputArray.sort((a, b) => a.length - b.length);

  let firstElement = inputArray[0];

  for (let index = 0; index < firstElement.length; index += 1) {
    if (inputArray.every(word => word.includes(firstElement[index]))) {
      resultArray.push(firstElement[index]);

      inputArray = inputArray.map(word => {
        let lettersArray = word.split('');

        lettersArray.splice(lettersArray.indexOf(firstElement[index]), 1);

        return lettersArray.join('');
      });
    }
  }

  return resultArray;
}