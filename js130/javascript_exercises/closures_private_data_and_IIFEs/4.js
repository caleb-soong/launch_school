function delegate(object, methodName, ...args) {
  return function() {
    return object[methodName].apply(object, args);
  };
}

let foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();

foo.bar = function() {
  console.log('changed');
};

baz.qux();