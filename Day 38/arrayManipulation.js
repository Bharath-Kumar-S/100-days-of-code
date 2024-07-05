function arrayManipulation(n, queries) {
  // Initialize the difference array
  let arr = new Array(n + 1).fill(0);

  // Apply the difference array technique
  for (const q of queries) {
    const [startIndex, lastIndex, value] = [q[0] - 1, q[1] - 1, q[2]];
    arr[startIndex] += value;
    if (lastIndex + 1 < n) {
      arr[lastIndex + 1] -= value;
    }
  }

  // Calculate the prefix sum and find the maximum value
  let max = 0;
  let current = 0;
  for (let i = 0; i < n; i++) {
    current += arr[i];
    if (current > max) {
      max = current;
    }
  }

  return max;
}

// Example usage:
const n = 10;
const queries = [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1],
];
console.log(arrayManipulation(n, queries)); // Output: 10
