class Greeting {
  greet(message) {
    console.log(message);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet('Goodbye');
  }
}

let hello = new Hello();
let goodbye = new Goodbye();

hello.greet('How are you?');
hello.hi();
goodbye.greet('How are you?');
goodbye.bye();