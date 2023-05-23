function doubleConsonants(string) {
  let result = '';
  string.split('').forEach(character => {
    if ('bcdfghjklmnpqrstvwxyz'.includes(character.toLowerCase())) {
      result += character + character;
    } else {
      result += character;
    }
  });
  return result;
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));