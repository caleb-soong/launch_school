function triangle(wholeNumber) {
  for (let index = 1; index <= wholeNumber; index += 1) {
    console.log(' '.repeat(wholeNumber - index) + '*'.repeat(index));
  }
}

triangle(5);
triangle(9);