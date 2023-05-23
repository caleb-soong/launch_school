function isUppercase(string) {
  for (let index = 0; index < string.length; index += 1) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(string[index])) {
      return false;
    }
  }
  return true;
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));