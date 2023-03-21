function multisum(suppliedNumber) {
  let sum = 0;

  for (let addend = 0; addend <= suppliedNumber; addend += 1) {
    if (addend % 3 === 0 || addend % 5 === 0) {
      sum += addend;
    }
  }

  return sum;
}

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));