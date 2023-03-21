input1 = 'exclamation';
input2 = ['hooray', 'yay'];

function filter(input) {
  return Array.isArray(input);
}

console.log(filter(input1));
console.log(filter(input2));