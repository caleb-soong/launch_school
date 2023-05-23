function stringToInteger(string) {
  let result = 0;
  for (let index = 0; index < string.length; index += 1) {
    result += string[index] * Math.pow(10, string.length - index - 1);
  }
  return result;
}

console.log(stringToInteger("4321") === 4321);
console.log(stringToInteger("570") === 570);