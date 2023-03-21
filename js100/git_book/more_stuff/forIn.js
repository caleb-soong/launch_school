let obj = { foo: 1, bar: 2, qux: 'c' };
for (let key in obj) {
  console.log(key);
}

let arr = [ 10, 20, 30 ]
for (let value of arr) {
  console.log(value);
}

let str = "abc";
for (let char of str) {
  console.log(char);
}