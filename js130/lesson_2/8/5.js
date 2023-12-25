function makeMultipleLister(number) {
  return function lister() {
    let counter = number;
    while (counter < 100) {
      console.log(counter);
      counter += number;
    }
  };
}

let lister = makeMultipleLister(17);
lister();