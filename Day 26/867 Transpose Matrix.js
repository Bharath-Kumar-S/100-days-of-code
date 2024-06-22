// 867 Transpose Matrix

const assert = require("assert");

const TransposeMatrix = (matrix) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let newMatrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
};

assert.deepEqual(
  TransposeMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
  [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]
);
