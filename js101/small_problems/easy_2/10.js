const readline = require('readline-sync');

let currentAge = readline.question('What is your age?\n');
let retirementAge = readline.question('At what age would you like to retire?\n');

let today = new Date();
let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + Number(retirementAge - currentAge)}.
You have only ${retirementAge - currentAge} years of work to go!`);