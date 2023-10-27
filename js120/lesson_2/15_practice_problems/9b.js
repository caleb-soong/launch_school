/* This is the original function which prints 0. All solutions print 3.
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
*/

/* self
let foo = {
  a: 0,
  incrementA: function() {
    let self = this;
    function increment() {
      self.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
*/

/* call or apply
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
*/

/* bind
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    let boundIncrement = increment.bind();

    boundIncrement();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
*/

/* arrow function
let foo = {
  a: 0,
  incrementA: function() {
    let increment = () => {
      this.a += 1;
    };

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
*/