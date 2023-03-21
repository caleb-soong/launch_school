function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}`);
  };
}