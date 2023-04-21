let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function addOddElements(array) {
  let currentSum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 2 === 1) {
      currentSum += array[index];
    }
  }
  return currentSum;
}

arr.sort((a, b) => addOddElements(a) - addOddElements(b));

console.log(arr);