/* eslint-disable max-lines-per-function */
function foo(condition) {
  let bar;
  let qux;
  let xyzzy;

  console.log(bar);

  qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    xyzzy = function() {
      let qux;
      qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);