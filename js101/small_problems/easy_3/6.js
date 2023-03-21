const readline = require('readline-sync');

console.log('Welcome to Madlibs!');

let noun = readline.question('Enter a noun:\n');
let verb = readline.question('Enter a verb:\n');
let adjective = readline.question('Enter an adjective:\n');
let adverb = readline.question('Enter an adverb:\n');

console.log(`The ${adjective} ${noun} ${verb}s ${adverb}.`);