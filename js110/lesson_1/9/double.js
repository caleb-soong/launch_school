let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    numbers[index] *= 2;
  }
  return numbers;
}

console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers); // => [2, 8, 6, 14, 4, 12]