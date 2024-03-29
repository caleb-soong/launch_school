"use strict";

function bind(context, callback) {
  return function() {
    callback.call(context);
  }
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }