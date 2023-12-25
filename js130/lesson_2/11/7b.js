(function countdown(number) {
  console.log(number);
  number -= 1;
  if (number >= 0) {
    countdown(number);
  }
})(7);