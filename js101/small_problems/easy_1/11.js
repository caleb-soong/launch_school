const OMEGA = "\u03A9";

function utf16Value(string) {
  let sum = 0;

  for (let index = 0; index < string.length; index += 1) {
    sum += string.charCodeAt(index);
  }

  return sum;
}

console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));