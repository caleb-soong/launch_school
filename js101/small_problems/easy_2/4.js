function multiply(factor1, factor2) {
  return factor1 * factor2;
}

function square(squareRoot) {
  return multiply(squareRoot, squareRoot);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);