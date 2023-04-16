let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sumOfAges = Object.values(ages).reduce((accumulator, currentValue) =>
  accumulator + currentValue, 0);

console.log(sumOfAges);