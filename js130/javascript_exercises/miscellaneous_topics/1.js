function sum(...args) {
  return args.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6));