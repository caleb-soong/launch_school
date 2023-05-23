function halvsies(array) {
  let firstHalf = [];
  let secondHalf = [];
  if (array.length % 2 === 0) {
    for (let idx = 0; idx < (array.length / 2); idx += 1) {
      firstHalf.push(array[idx]);
    }
    for (let idx = (array.length / 2); idx < array.length; idx += 1) {
      secondHalf.push(array[idx]);
    }
  } else {
    for (let idx = 0; idx < array.length / 2; idx += 1) {
      firstHalf.push(array[idx]);
    }
    for (let idx = (array.length / 2) + 0.5; idx < array.length; idx += 1) {
      secondHalf.push(array[idx]);
    }
  }
  return [firstHalf, secondHalf];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));