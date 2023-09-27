function objectsEqual(obj1, obj2) {
  return Object.entries(obj1).join() === Object.entries(obj2).join();
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));
console.log(objectsEqual({}, {}));
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));