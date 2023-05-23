let readlineSync = require('readline-sync');

console.log('Enter the 1st number: ');
let number1 = Number(readlineSync.question());
console.log('Enter the 2nd number: ');
let number2 = Number(readlineSync.question());
console.log('Enter the 3rd number: ');
let number3 = Number(readlineSync.question());
console.log('Enter the 4th number: ');
let number4 = Number(readlineSync.question());
console.log('Enter the 5th number: ');
let number5 = Number(readlineSync.question());
console.log('Enter the 6th number: ');
let number6 = Number(readlineSync.question());

let numbersArray = [number1, number2, number3, number4, number5];

function isFinalNumberUnique() {
  if (numbersArray.includes(number6)) {
    console.log(`The number ${number6} appears in ${numbersArray.join()}.`);
  } else {
    console.log(`The number ${number6} does not appear in ${numbersArray.join()}.`);
  }
}

isFinalNumberUnique();