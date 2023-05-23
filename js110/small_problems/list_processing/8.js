function buyFruit(array) {
  let result = [];
  array.forEach(subarray => {
    let counter = subarray[1];
    while (counter > 0) {
      result.push(subarray[0]);
      counter -= 1;
    }
  });
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));