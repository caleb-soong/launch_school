/*

(Test frequently)
(Use one example and comment out the others)
(Show return value, not boolean)

Input:
string

Output:
object with three properties

Rules:
no empty input strings

Examples:
*/
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
/*
Data structure:
an array to iterate through the string
an object to count the instances of each character type

Algorithm:
1. Initialize an empty object.
2. Convert the input string to an array.
3. Initialize counts to zero for each
character type.
4. Iterate through the array.
  1. Increment the correct count for each character.
5. Assign the object properties using the counts
converted to percentages.
6. Return the object.
*/

function letterPercentages(string) {
  let object = {};

  let array = string.split('');

  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;

  array.forEach(element => {
    if ('qwertyuiopasdfghjklzxcvbnm'.includes(element)) {
      lowercase += 1;
    } else if ('QWERTYUIOPASDFGHJKLZXCVBNM'.includes(element)) {
      uppercase += 1;
    } else {
      neither += 1;
    }
  });

  object['lowercase'] = ((lowercase / string.length) * 100).toFixed(2);
  object['uppercase'] = ((uppercase / string.length) * 100).toFixed(2);
  object['neither'] = ((neither / string.length) * 100).toFixed(2);

  return object;
}