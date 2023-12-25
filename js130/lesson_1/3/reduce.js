function reduce(array, callback, initial) {
  if (initial !== undefined) {
    for (let index = 0; index < array.length; index += 1) {
      initial = callback(initial, array[index]);
    }
    return initial;
  } else {
    let initial = array[0];
    for (let index = 1; index < array.length; index += 1) {
      initial = callback(initial, array[index]);
    }
    return initial;
  }
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));
console.log(reduce(numbers, (prod, number) => prod * number));
console.log(reduce(numbers, (prod, number) => prod * number, 3));
console.log(reduce([], (accum, number) => accum + number, 10));
console.log(reduce([], (accum, number) => accum + number));

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));