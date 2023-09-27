let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

/*
foo.ancestors = function() {
  let prototypeChain = [];
  let currentObject = this;
  while (Object.getPrototypeOf(currentObject)) {
    prototypeChain.push(Object.getPrototypeOf(currentObject).name);
    currentObject = Object.getPrototypeOf(currentObject);
  }
  return prototypeChain;
};
*/

Object.prototype.ancestors = function ancestors() {
  let ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};

console.log(qux.ancestors());
console.log(baz.ancestors());
console.log(bar.ancestors());
console.log(foo.ancestors());