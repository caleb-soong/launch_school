let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOddIndices(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (index % 2 === 1) {
      numbers[index] *= 2;
    }
  }
  return numbers;
}

console.log(doubleOddIndices(myNumbers));
console.log(myNumbers);