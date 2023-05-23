function runningTotal(array) {
  let result = [];
  let sum = 0;

  for (let index = 0; index < array.length; index += 1) {
    result.push((sum += array[index]));
  }

  return result;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));