let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

//function allMatches(words, pattern) {
  //let matches = [];
  //for (let index = 0; index < words.length; index += 1) {
    //if (pattern.test(words[index])) {
      //matches.push(words[index]);
    //}
  //}
//
  //return matches;
//} 

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

console.log(allMatches(words, /lab/));