/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

//Remove all non-letter characters from a string

Input:
string

Output:
string of length less than or equal to
length of input string

Rules:


Examples:
*/
console.log(onlyLetters('I wrote this string on 7/18/2023.'));
/*
Data structure:


Algorithm:

*/

function onlyLetters(string) {
  return string.split('').filter(character => 'qwertyuiopasdfghjklzxcvbnm'.includes(character.toLowerCase())).join('');
}