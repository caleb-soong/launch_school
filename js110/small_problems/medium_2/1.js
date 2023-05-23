/*
P: Input is a string and output is an object with three properties.
E: The input string will never be empty.
D: Strings and objects. The input string will be converted to an array
to allow for list processing strategies.
A: The input string will be converted to an array of characters. Three counters
with numeric values of zero will be initialized. As the array is iterated
through, the counters will increase. After iteration, the result object with
three properties will be initialized. The values will be calculated using the
counter and the length of the array.
*/

function letterPercentages(string) {
  let array = string.split('');
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;
  array.forEach(character => {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(character)) {
      lowercaseCount += 1;
    } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(character)) {
      uppercaseCount += 1;
    } else {
      neitherCount += 1;
    }
  });
  return {lowercase: ((lowercaseCount / array.length) * 100).toFixed(2),
    uppercase: ((uppercaseCount / array.length) * 100).toFixed(2),
    neither: ((neitherCount / array.length) * 100).toFixed(2)};
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));
