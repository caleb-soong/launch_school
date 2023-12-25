function map(array, callback) {
  return array.reduce((transformedItems, value) => {
    transformedItems.push(callback(value));
    return transformedItems;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));
console.log(map(numbers, number => number + 1));
console.log(map(numbers, () => false));

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));