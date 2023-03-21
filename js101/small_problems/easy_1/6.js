let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0:");
let integer = readlineSync.prompt();
integer = parseInt(integer, 10);

console.log('Enter "s" to compute the sum or "p" to compute the product.');
let choice = readlineSync.prompt();

function computeSum(integer) {
  let sum = integer * ((1 + integer) / 2);
  console.log(`The sum is ${sum}.`);
}

function computeProduct(integer) {
  let product = integer;
  for (let factor = integer; factor > 2; factor -= 1) {
    product *= (factor - 1);
  }
  console.log(`The product is ${product}.`);
}

if (choice.toLowerCase() === 's') {
  computeSum(integer);
} else if (choice.toLowerCase() === 'p') {
  computeProduct(integer);
} else {
  console.log('You did not enter "s" or "p".');
}