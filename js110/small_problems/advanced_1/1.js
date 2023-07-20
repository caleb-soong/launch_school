/* eslint-disable indent */
/*
Understand the problem:
Write a function that randomly selects one of each of the following
and inserts it into a text template: adjective, noun, verb, adverb
Input: all words that could be selected (data type tbd)
Output: string
*/

/*
These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------
*/

/*
madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
*/

/*
Data structure:
I can use an object whose values are arrays to store the lists
of words of each of the four parts of speech.
*/

/*
Algorithm: parent function
1. Create an object of arrays to store the words.
2. Return the text template calling the helper function
at each point where a random word needs selection.

Algorithm: helper function
Input: array
Output: string
1. Return a randomly selected array element.
*/

let wordsObject = {adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
                          nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
                          verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
                        adverbs: ['easily', 'lazily', 'noisily', 'excitedly']};

function random(array) {
  let randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
}

function madlibs1() {
  return `The 
  ${random(wordsObject.adjectives)} brown 
  ${random(wordsObject.nouns)} 
  ${random(wordsObject.adverbs)} 
  ${random(wordsObject.verbs)} the 
  ${random(wordsObject.adjectives)} yellow 
  ${random(wordsObject.nouns)}, who 
  ${random(wordsObject.adverbs)} 
  ${random(wordsObject.verbs)} his 
  ${random(wordsObject.nouns)} and looks around.`;
}

function madlibs2() {
  return `The ${random(wordsObject.nouns)} ${random(wordsObject.verbs)} the ${random(wordsObject.nouns)}'s ${random(wordsObject.nouns)}.`;
}

console.log(madlibs1());
console.log(madlibs2());