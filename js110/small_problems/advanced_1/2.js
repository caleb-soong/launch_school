const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let transposedMatrix = [];

  for (let column = 0; column < matrix[0].length; column += 1) {
    let transposedMatrixRow = [];

    for (let row = 0; row < matrix.length; row += 1) {
      transposedMatrixRow.push(matrix[row][column]);
    }

    transposedMatrix.push(transposedMatrixRow);
  }

  return transposedMatrix;
}

// transpose:
// [1, 4, 3]
// [5, 7, 9]
// [8, 2, 6]

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]