/*
Given a string, return a string that removes all characters without a prime
number of occurances in the input string. Case should be ignored when
counting occurances, although case should be retained in the output string.
Also, order should be retained.
*/

/*
Understand the problem:
Input: string
Ouput: input string with some characters possibly removed
Rules:
Case shoud be ignored when counting the occurance of characters.
Case should be retained in the output.
Order should be retained.
*/

//Examples:
console.log(primeString('eaEaAABabBaAcFFFfCcd') === 'eaEaAABabBaAcCc'); // true

/*
Data stucture:
Object to count occurances
Array to filter the characters in the string
*/

/*
Parent function algorithm:
1. Initialize an empty object to count the occurances
of each character in the input string.
2. Convert the string to lowercase.
3. Iterate through the lowercase string.
  1. If the character exists as an object property,
  increment the value by 1.
  Else, add that object property to the object with
  a value of 1.
4. Convert the input string to an array.
5. Filter the array for array elements with a prime number
of occurances (according to its lowercase value)
in the count object.
6. Convert the filtered array to a string.
7. Return the string.

Helper function algorithm:
Input: integer (dividend)
Output: boolean
1. If the dividend is less than 2, return false.
2. Initialize a divisor to 2.
3. Declare a loop that runs while the divisor is
less than or equal to half the input number.
  1. If the quotient has no remainder, return false.
  2. Increment the divisor.
4. Return true.
*/

function isPrime(dividend) {
  if (dividend < 2) {
    return false;
  }

  let divisor = 2;

  while (divisor <= dividend / 2) {
    if (dividend % divisor === 0) {
      return false;
    }

    divisor += 1;
  }

  return true;
}

function primeString(string) {
  let countObject = {};

  let lowercaseString = string.toLowerCase();

  for (let index = 0; index < lowercaseString.length; index += 1) {
    countObject[lowercaseString[index]] =
    (countObject[lowercaseString[index]] || 0) + 1;
  }

  let array = string.split('');

  let primeArray = array.filter(character =>
    isPrime(countObject[character.toLowerCase()]));

  let result = primeArray.join('');

  return result;
}