function swapName(string) {
  return string.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));