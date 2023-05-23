function sum(integer) {
  return String(integer).split('').map(element => Number(element)).reduce((total, addend) => total + addend, 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));