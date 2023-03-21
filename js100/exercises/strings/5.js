let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function compare(first, second) {
  if (first.toUpperCase() === second.toUpperCase()) {
    return true;
  }
}

console.log(compare(string1, string2));
console.log(compare(string2, string1));
console.log(compare(string1, string3));
console.log(compare(string3, string1));
console.log(compare(string2, string3));
console.log(compare(string3, string2));