let total = 0;

function add(addend) {
  total += addend;
  console.log(total);
}

function subtract(subtrahend) {
  total -= subtrahend;
  console.log(total);
}

add(1);
add(42);
subtract(39);
add(6);