// Capitalize each distinct character in a string,
// however, only its second to last occurrence.
// If the character occurs only once in a string, leave it unchanged.

//string method
//no object
//use object in different way

/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
string

Output:
new string

Rules:
New string could possibly be the same as the input string
input string has no uppercase letters
input string has can have characters other than letters
if character occurs once, do not capitalize
if character occurs twice or more, capitalize second-to-last

Examples:
*/
console.log(capitalize('assessments') === 'assEsSments');
console.log(capitalize('launch school') === 'LaunCH schOol');
/*
Data structure:
object to count the occurrences of characters
{a: 1, s: 5, e: 2, m: 1, n: 1, t: 1}

Algorithm:
1. initialize an empty result string
2. initialize an empty count object
3. iterate through the string
  1. if the character exists as an object property,
  increment the value by 1.
  else, add that object property with a value of 1
4. iterate through the string.
  1. if the character occurs multiple times and is
  the last second to instance of that character,
  add the uppercase of that character to the string.
  else, add the character to the string.
*/

function capitalize(string) {
  let result = '';

  let count = {};

  for (let index = 0; index < string.length; index += 1) {
    count[string[index]] = (count[string[index]] || 0) + 1;
  }

  for (let index = 0; index < string.length; index += 1) {
    if (count[string[index]] > 1 && index ===
      string.lastIndexOf(string[index],
        string.lastIndexOf(string[index]) - 1)) {
      result += string[index].toUpperCase();
    } else {
      result += string[index];
    }
  }

  return result;
}