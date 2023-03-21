let str1 = "Come over here!";
let str2 = "What's up, Doc?";

function endsWithExclamationMark (string) {
  return string[string.length - 1] === '!';
}

console.log(endsWithExclamationMark(str1));
console.log(endsWithExclamationMark(str2));