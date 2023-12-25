function makeMultipleLister(number) {
  return function() {
    let original = number;
    while (number < 100) {
      console.log(number);
      number += original;
    }
  }
}

let lister = makeMultipleLister(17);
lister();