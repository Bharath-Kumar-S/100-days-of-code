const assert = require("assert");

function flippingMatrix(matrix) {
  // Write your code here
  let n = matrix.length / 2;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Calculate the four possible values
      let val1 = matrix[i][j];
      let val2 = matrix[i][2 * n - 1 - j];
      let val3 = matrix[2 * n - 1 - i][j];
      let val4 = matrix[2 * n - 1 - i][2 * n - 1 - j];

      // Add the maximum of the four possible values
      maxSum += Math.max(val1, val2, val3, val4);
    }
  }

  return maxSum;
}

assert.equal(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ]),
  414
);
assert.equal(
  flippingMatrix([
    [1, 2],
    [3, 4],
  ]),
  4
);
assert.equal(
  flippingMatrix([
    [112, 42],
    [56, 125],
  ]),
  125
);
