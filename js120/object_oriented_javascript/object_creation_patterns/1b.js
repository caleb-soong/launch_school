let foo = {name: 'foo'};

foo.ancestors = function() {
  let array = [];

  let currentObject = this;

  while (Object.getPrototypeOf(currentObject)) {
    array.push(Object.getPrototypeOf(currentObject).name || 'Object.prototype');
    currentObject = Object.getPrototypeOf(currentObject);
  }

  return array;
};

let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());
console.log(baz.ancestors());
console.log(bar.ancestors());
console.log(foo.ancestors());