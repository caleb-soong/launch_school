function diamond(height) {
  let rowSize = 1;
  while (rowSize < height) {
    createRow(rowSize, height);
    rowSize += 2;
  }
  while (rowSize >= 1) {
    createRow(rowSize, height);
    rowSize -= 2;
  }
}

function createRow(rowSize, height) {
  console.log(' '.repeat((height - rowSize) / 2 ) + '*'.repeat(rowSize) + ' '.repeat((height - rowSize) / 2 ));
}

diamond(1);
diamond(3);
diamond(9);