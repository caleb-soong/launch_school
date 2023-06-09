function isBalanced(string) {
  let counter = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '(') {
      counter += 1;
    } else if (string[index] === ')') {
      counter -= 1;
    }
    if (counter < 0) return false;
  }
  return counter === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);