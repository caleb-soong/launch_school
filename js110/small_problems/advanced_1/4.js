let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrix) {
  let rotatedMatrix = [];

  for (let row = 0; row < matrix[0].length; row += 1) {
    let rotatedMatrixRow = [];

    for (let column = 0; column < matrix.length; column += 1) {
      rotatedMatrixRow.unshift(matrix[column][row]);
    }

    rotatedMatrix.push(rotatedMatrixRow);
  }

  return rotatedMatrix;
}

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]