function wordSizes(string) {
  let result = {};
  let filteredCharacters = string.split('').filter(character => {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '.includes(character);
  });
  let filteredWords = filteredCharacters.join('').split(' ');
  filteredWords.forEach(word => {
    if (word.length > 0) {
      if (!result[word.length]) {
        result[word.length] = 0;
      }
      result[word.length] += 1;
    }
  });
  return result;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));