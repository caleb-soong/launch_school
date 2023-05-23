/*
P: Input is an integer and output is a larger number which must meet
certain conditions.
1) It must be odd.
2) It must be a multiple of 7.
3) No digits may repeat.
4) Integers which are too large must return an error message.
E: The largest possible output is 9876543201, so the largest possible input is
one less than that which is 9876543200
D: Numbers will be used, but a string should be used
to determine repeating digits.
A: Input validation will be handled first only considering integers
that are too large. An error message is defined outside of the function.
The input will be incremented by one
since the output must be greater than the input.
A loop will run that increments this number by one until all of the
conditions are met for a featured number. Then this result will be returned.
A helper function will check for the all conditions of a featured number. Within
that helper function, another helper function will determine if digits repeat by
iterating through a string equivalent of the number. An outer loop will
increment the left digit to be compared to the right digit, and the right digit
will increment within an inner loop.
*/

const errorMessage = 'There is no possible number that fulfills those requirements.';

function featured(number) {
  if (number > 9876543200) {
    return errorMessage;
  }
  number += 1;
  while (true) {
    if (isFeaturedNumber(number)) {
      break;
    }
    number += 1;
  }
  return number;
}

function isFeaturedNumber(number) {
  if ((number % 2 === 1) && (number % 7 === 0) && (noRepeatingDigits(number))) {
    return true;
  } else {
    return false;
  }
}

function noRepeatingDigits(number) {
  let numberString = String(number);
  for (let left = 0; left < numberString.length - 1; left += 1) {
    for (let right = left + 1; right < numberString.length; right += 1) {
      if (numberString[left] === numberString[right]) {
        return false;
      }
    }
  }
  return true;
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));