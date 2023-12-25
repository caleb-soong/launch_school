function qux(first, second, third, fourth, last) {
  return {
    first,
    middle: [second, third, fourth].sort(),
    last,
  };
}

let arr = [1, 2, 3, 4, 5];
let { first, middle, last } = qux(...arr);

console.log(first, middle, last);