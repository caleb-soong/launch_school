//Examples of Declaration and Initialization

let a = 1;

let team1 = 'Saints';
let team2 = 'Pelicans';

let b = true;
let c = false;
let d = undefined;
let e = null;

let teamsArray = ['Saints', 'Pelicans'];
let teamsObject = {Football: 'Saints', Basketball: 'Pelicans'}

const hometown = 'New Orleans';

language = 'JavaScript';

var language;
language = 'JavaScript';

let something;

//Examples of Reassignment

let x = 1;
x = 2;
console.log(x); //prints 2

const y = 1;
y = 2; //TypeError: Assignment to constant variable.

let m = 1;
let n = m;
m = 2;
console.log(m); //prints 2
console.log(n); //prints 1

function subtraction(minuend, subtrahend) {
  let difference = minuend - subtrahend;
  return difference;
}