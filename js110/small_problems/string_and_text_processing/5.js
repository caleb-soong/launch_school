function swapCase(string) {
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    if ('abcdefghijklmnopqrstuvwxyz'.includes(string[index])) {
      result += string[index].toUpperCase();
    } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(string[index])) {
      result += string[index].toLowerCase();
    } else {
      result += string[index];
    }
  }
  return result;
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));