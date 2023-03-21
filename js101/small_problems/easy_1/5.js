let readlineSync = require("readline-sync");

console.log("What is the bill?");
let bill = readlineSync.prompt();
bill = parseFloat(bill);

console.log("What is the tip percentage?");
let tipPercentage = readlineSync.prompt();
tipPercentage = parseFloat(tipPercentage);

let tip = bill * (tipPercentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);