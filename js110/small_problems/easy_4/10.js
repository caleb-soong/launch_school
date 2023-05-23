function stringToInteger(string) {
  let result = 0;
  for (let index = 0; index < string.length; index += 1) {
    result += string[index] * Math.pow(10, string.length - index - 1);
  }
  return result;
}

function stringToSignedInteger(string) {
  if (!'+-'.includes(string[0])) {
    return stringToInteger(string);
  } else if (string[0] === '+') {
    return stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string.slice(1)) * -1;
  }
}

console.log(stringToSignedInteger("4321") === 4321);
console.log(stringToSignedInteger("-570") === -570);
console.log(stringToSignedInteger("+100") === 100);