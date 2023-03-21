function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum);

let difference = subtract(80, 10);
console.log(difference);

console.log(add(20, 45));
console.log(subtract(80, 10));

function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10)));

let result = times(sum, difference);
console.log(result);

add(subtract(80, 10), times(subtract(20, 6), add(30, 5)));