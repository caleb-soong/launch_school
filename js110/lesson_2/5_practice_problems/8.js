let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(wordsArray => {
  wordsArray.forEach(word => {
    word.split('').forEach(character => {
      if ('aeiou'.includes(character)) {
        console.log(character);
      }
    });
  });
});