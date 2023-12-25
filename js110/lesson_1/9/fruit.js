let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(inputObject) {
  let fruitsObject = {};
  for (let key in inputObject) {
    if (inputObject[key] === 'Fruit') {
      fruitsObject[key] = inputObject[key];
    }
  }
  return fruitsObject;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }