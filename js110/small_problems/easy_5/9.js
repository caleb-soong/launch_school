let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let result = {};
  array.forEach(element => {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  });
  Object.entries(result).forEach(keyValue => console.log(`${keyValue[0]} => ${keyValue[1]}`));
}

countOccurrences(vehicles);