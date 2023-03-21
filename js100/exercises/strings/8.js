function isBlank(string) {
  return string.trim().length === 0;
}

console.log(isBlank(''));
console.log(isBlank(' '));
console.log(isBlank('%'));