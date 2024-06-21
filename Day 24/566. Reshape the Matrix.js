// // 566 566. Reshape the Matrix

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]
// Example 2:

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// -1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  // Calculate the total number of elements in the original matrix
  let m = mat.length;
  let n = mat[0].length;
  let totalElements = m * n;

  // If the reshape operation is not possible, return the original matrix
  if (totalElements !== r * c) {
    return mat;
  }

  // Flatten the original matrix into a single array
  let flat = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      flat.push(mat[i][j]);
    }
  }

  // Create the new reshaped matrix
  let reshapedMatrix = [];
  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      row.push(flat[i * c + j]);
    }
    reshapedMatrix.push(row);
  }

  return reshapedMatrix;
};

// Explanation:
// Calculate the total number of elements in the original matrix.
// Check if the reshape operation is possible by comparing the total number of elements in the original matrix with r * c. If they are not equal, return the original matrix.
// Flatten the original matrix into a single array.
// Create a new matrix with the specified dimensions r and c by populating it with elements from the flattened array.
// Return the reshaped matrix.
// This approach ensures that the matrix is reshaped correctly if possible, otherwise it returns the original matrix as specified.
