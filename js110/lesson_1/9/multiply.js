let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(numbers, factor) {
  let product = [];
  for (let index = 0; index < numbers.length; index++) {
    product.push(numbers[index] * factor);
  }
  return product;
}

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers); // => [3, 12, 9, 21, 6, 18]