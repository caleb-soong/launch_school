let numberWordsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  for (let index = 0; index < numberWordsArray.length; index += 1) {
    string = string.replaceAll(numberWordsArray[index], index);
  }
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));