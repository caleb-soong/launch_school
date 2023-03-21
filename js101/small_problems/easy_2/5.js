const readline = require('readline-sync');

let number1 = Number(readline.question('Enter the first number:'));
let number2 = Number(readline.question('Enter the second number:'));

function operations() {
  console.log(`${number1} + ${number2} = ${number1 + number2}`);
  console.log(`${number1} - ${number2} = ${number1 - number2}`);
  console.log(`${number1} * ${number2} = ${number1 * number2}`);
  console.log(`${number1} / ${number2} = ${Math.floor(number1 / number2)}`);
  console.log(`${number1} % ${number2} = ${number1 % number2}`);
  console.log(`${number1} ** ${number2} = ${Math.pow(number1, number2)}`);
}

operations();