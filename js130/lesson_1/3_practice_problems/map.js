function map(array, callback) {
  let mappedArray = [];
  for (let index = 0; index < array.length; index += 1) {
    mappedArray.push(callback(array[index]));
  }
  return mappedArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));
console.log(map(numbers, number => number + 1));
console.log(map(numbers, () => false));

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));