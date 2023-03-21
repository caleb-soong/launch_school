function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName("What is your first name?\n");
let lastName = getName("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);