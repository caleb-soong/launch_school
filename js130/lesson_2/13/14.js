function sum(...numbers) {
  return numbers.reduce((sum, number) => sum + number);
}

let arr = [1, 2, 3, 4];

console.log(sum(1, 2, 3, 4));
console.log(sum(...arr));