function digitList(integer) {
  return String(integer).split('').map(element => Number(element));
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));