//Swap the capitalization of every “nth” letter of a string

/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
string and number

Output:
string of same length probably with different capitalization

Rules:
Skip over non letters when determining the next nth character

Examples:
*/
console.log(swapCap('Launch School', 4));
console.log(swapCap('Attempt #3 Interview Assessment', 3));
/*
Data structure:


Algorithm:
1. Convert the input string to an array.
2. Initialize a count variable to 1.
3. Iterate over the array.
  1. If the character is a letter,
    1. If the count is a multiple of n,
      1. If the character is lowercase, convert to uppercase,
      else, convert to lowercase.
    2. Increment the count
4. Join the mutated array to a string and return it
*/

function swapCap(string, number) {
  let array = string.split('');

  let count = 1;

  for (let index = 0; index < array.length; index += 1) {
    if ('qwertyuiopasdfghjklzxcvbnm'.includes(array[index].toLowerCase())) {
      if (count % number === 0) {
        if (array[index] === array[index].toLowerCase()) {
          array[index] = array[index].toUpperCase();
        } else {
          array[index] = array[index].toLowerCase();
        }
      }

      count += 1;
    }
  }

  return array.join('');
}