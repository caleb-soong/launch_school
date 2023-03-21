// Ask the user for the loan amount.
// Ask the user for the annual percentage rate.
// Ask the user for the loan duration.
// Calculate the monthly interest rate.
// Calculate the monthly payment.
// Print the monthly payment to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) <= 0;
}

prompt('Welcome to Mortgage / Car Loan Calculator!');

prompt('Enter the loan amount.');
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt("Hmm... that doesn't look like a valid number.");
  loanAmount = readline.question();
}

prompt('Enter the annual percentage rate as a decimal.');
let annualPercentageRate = readline.question();

while (invalidNumber(annualPercentageRate)) {
  prompt("Hmm... that doesn't look like a valid number.");
  annualPercentageRate = readline.question();
}

prompt('Enter the loan duration in months.');
let loanDurationInMonths = readline.question();

while (invalidNumber(loanDurationInMonths)) {
  prompt("Hmm... that doesn't look like a valid number.");
  loanDurationInMonths = readline.question();
}

let loan = Number(loanAmount);
let rate = Number(annualPercentageRate) / 12; //monthly interest rate
let months = Number(loanDurationInMonths);

let monthlyPayment = loan * (rate / (1 - Math.pow((1 + rate), (-months))));

prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);