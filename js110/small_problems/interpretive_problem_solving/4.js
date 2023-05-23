function star(size) {
  let rowNumber = 1;
  let spaceBefore = 0;
  let spaceAfter = (size - 3) / 2;
  while (rowNumber < size / 2) {
    console.log(' '.repeat(spaceBefore) + '*' + ' '.repeat(spaceAfter) + '*' + ' '.repeat(spaceAfter) + '*' + ' '.repeat(spaceBefore));
    rowNumber += 1;
    spaceBefore += 1;
    spaceAfter -= 1;
  }
  console.log('*'.repeat(size));
  while (rowNumber > 1) {
    console.log(' '.repeat(spaceBefore - 1) + '*' + ' '.repeat(spaceAfter + 1) + '*' + ' '.repeat(spaceAfter + 1) + '*' + ' '.repeat(spaceBefore - 1));
    rowNumber -= 1;
    spaceBefore -= 1;
    spaceAfter += 1;
  }
}

star(7);
star(9);