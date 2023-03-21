function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething("Pursuit of happiness"));
console.log(doSomething("A good dog"));