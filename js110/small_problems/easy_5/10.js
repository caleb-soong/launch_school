function average(array) {
  return Math.floor(array.reduce((sum, number) => sum + number) / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));