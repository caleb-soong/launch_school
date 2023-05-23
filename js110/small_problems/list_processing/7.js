function sumOfSums(array) {
  let sum = 0;
  for (let index = array.length - 1; index >= 0; index -= 1) {
    sum += array[index] * (array.length - index);
  }
  return sum;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));