/*
(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Given a string, return a string that removes all characters without a prime
number of occurrences in the input string. Case should be ignored when
counting occurrences, although case should be retained in the output string.
Also, order should be retained.

Input:
string

Output:
string of equal or lesser length

Rules:
prime occurrences are kept, those composite are removed
ignore case when counting
retain case in the output string
retain order of characters in output string

Examples:
*/
console.log(primeString('eaEaAABabBaAcFFFfCcd') === 'eaEaAABabBaAcCc'); // true
/*
Data structure:


parent function Algorithm:
1. create a lowercase copy of the input string.
2. initialize an empty count object.
3. iterate through the lowercase copy
  1. if the current character exists as an object property,
  increment the object value.
  else, add that object property and set value to 1
4. convert the input string to an array of characters.
5. filter that array for elements whose lowercase has a prime value
in the count object.
6. return that filtered array joined to a string.
*/

function primeString(string) {
  let lowercase = string.toLowerCase();

  let count = {};

  for (let index = 0; index < lowercase.length; index += 1) {
    count[lowercase[index]] = (count[lowercase[index]] || 0) + 1;
  }

  let array = string.split('');

  let filteredArray = array.filter(letter =>
    isPrime(count[letter.toLowerCase()]));

  return filteredArray.join('');
}

/*
help function algorithm:
input: dividend
output: boolean
1. if dividend is less than 2, return false
2. initialize a divisor to 2
3. declare a loop that runs while the divisor is
less than or equal to half the dividend
  1. if the quotient has no remainder, return false
  2. increment the divisor
4. return true

*/

function isPrime(dividend) {
  if (dividend < 2) return false;

  let divisor = 2;

  while (divisor <= dividend / 2) {
    if (dividend % divisor === 0) return false;

    divisor += 1;
  }

  return true;
}