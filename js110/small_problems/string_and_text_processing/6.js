function staggeredCase(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    if (index % 2 === 0) {
      result += string[index].toUpperCase();
    } else {
      result += string[index].toLowerCase();
    }
  }
  return result;
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));