function reverseWords(string) {
  let result = [];
  string.split(' ').forEach(word => {
    if (word.length >= 5) {
      word = reverseWord(word);
    }
    result.push(word);
  });
  return result.join(' ');
}

function reverseWord(string) {
  let result = '';
  for (let index = string.length - 1; index >= 0; index -= 1) {
    result += string[index];
  }
  return result;
}

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));