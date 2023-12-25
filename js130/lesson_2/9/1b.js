function makeCounterLogger(number1) {
  return function(number2) {
    if (number1 < number2) {
      for (let index = number1; index <= number2; index += 1) {
        console.log(index);
      }
    } else if (number1 > number2) {
      for (let index = number1; index >= number2; index -= 1) {
        console.log(index)
      }
    } else {
      console.log(number1);
    }


  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);