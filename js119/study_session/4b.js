/* eslint-disable max-lines-per-function */
/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

// Capitalize each distinct character in a string,
// however, only its second to last occurrence.
// If the character occurs only once in a string, leave it unchanged.

//*string method*
//no object
//use object in different way

Input:
string

Output:
string of same length

Rules:
capitalize the second to last occurrence of each distinct character
I assume inputs do not contain uppercase letters
if a character only occurs once, then there is no 2nd to last occurrence

Examples:
*/
console.log(capitalize('assessments') === 'assEsSments');
console.log(capitalize('launch school') === 'LaunCH schOol');
/*
Data structure:


Algorithm:
1. Initialize an empty count object.
2. Iterate through the input string.
  1. If the character exists as an object property,
  increment the value
  else, add that object property and set the value to 1
3. initialize an empty result string.
4. Iterate through the input string.
  1. If the character exists as an object property and
  the value is greater than 1 and it is the second to last
  occurrence of that character in the string, add the
  uppercase of the character to the result string.
  else, add the character to the result string.
5. return the result string.
*/

function capitalize(string) {
  let count = {};

  for (let index = 0; index < string.length; index += 1) {
    count[string[index]] = (count[string[index]] || 0) + 1;
  }

  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    if (count[string[index]] > 1 &&
      index === string.lastIndexOf(string[index],
        string.lastIndexOf(string[index]) - 1)) {
      result += string[index].toUpperCase();
    } else {
      result += string[index];
    }
  }

  return result;
}

/*
function capitalize(string) {
  let count = {};

  for (let index = 0; index < string.length; index += 1) {
    count[string[index]] = (count[string[index]] || 0) + 1;
  }

  let array = string.split('');

  let newArray = array.map((letter, index) => {
    if (count[letter] > 1 &&
      index === array.lastIndexOf(array[index],
        array.lastIndexOf(array[index]) - 1)) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  });

  return newArray.join('');
}
*/