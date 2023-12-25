const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
console.log(foo);
console.log(rest);