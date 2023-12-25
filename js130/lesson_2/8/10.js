"use strict";

function bind(object, callback) {
  return () => callback.call(object);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj);