const readline = require('readline-sync');

console.log('What is your name?');

let name = readline.question();

function greeting() {
  if (name.endsWith('!')) {
    console.log(`HELLO ${name.substring(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greeting();