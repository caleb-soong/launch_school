function makeCounterLogger(number) {
  return function(second) {
    let first = number;
    if (first < second) {
      while (first <= second) {
        console.log(first);
        first += 1;
      }
    } else if (first > second) {
      while (first >= second) {
        console.log(first);
        first -= 1;
      }
    } else {
      console.log(first);
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);