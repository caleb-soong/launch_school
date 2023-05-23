function multiplicativeAverage(array) {
  let product = 1;
  array.forEach(element => {
    product *= element;
  });
  let result = String(Math.round((product / array.length) * 1000) / 1000);
  if (Number.isInteger(result * 10)) {
    return result + '00';
  } else if (Number.isInteger(result * 100)) {
    return result + '0';
  } else {
    return result;
  }
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));