function isItemAvailable(number, array) {
  let result = 0;
  transactionsFor(number, array).forEach(object => {
    if (object.movement === 'in') {
      result += object.quantity;
    } else {
      result -= object.quantity;
    }
  });
  return result > 0;
}

function transactionsFor(number, array) {
  let result = [];
  array.forEach(object => {
    if (object.id === number) {
      result.push(object);
    }
  });
  return result;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));