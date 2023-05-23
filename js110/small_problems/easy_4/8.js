function swap(string) {
  let array = string.split(' ').map(word => {
    if (word.length > 1) {
      return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
    } else {
      return word;
    }
  });
  return array.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));