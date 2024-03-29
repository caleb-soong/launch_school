function filter(array, callback) {
  return array.reduce((filteredItems, value) => {
    if (callback(value)) {
      filteredItems.push(value);
    }
    return filteredItems;
  }, []);
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3));
console.log(filter(numbers, number => number < 0));
console.log(filter(numbers, () => true));

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));