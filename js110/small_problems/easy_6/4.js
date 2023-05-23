function sequence(integer) {
  let result = [];
  let counter = 1;
  while (counter <= integer) {
    result.push(counter);
    counter += 1;
  }
  return result;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));