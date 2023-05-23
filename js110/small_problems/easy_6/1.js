function repeater(string) {
  let result = '';
  string.split('').forEach(character => {
    result += character;
    result += character;
  });
  return result;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));