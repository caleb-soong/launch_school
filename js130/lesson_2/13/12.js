const obj = { a: 'a', b: 'b', c: 'c' };

const { c: tail, ...obj2 } = obj;

console.log(tail, obj2);