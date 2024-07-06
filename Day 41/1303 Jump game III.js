// Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach any index with value 0.

const assert = require("assert");

// Notice that you can not jump outside of the array at any time.

// Example 1:

// Input: arr = [4,2,3,0,3,1,2], start = 5
// Output: true
// Explanation:
// All possible ways to reach at index 3 with value 0 are:
// index 5 -> index 4 -> index 1 -> index 3
// index 5 -> index 6 -> index 4 -> index 1 -> index 3
// Example 2:

// Input: arr = [4,2,3,0,3,1,2], start = 0
// Output: true
// Explanation:
// One possible way to reach at index 3 with value 0 is:
// index 0 -> index 4 -> index 1 -> index 3
// Example 3:

// Input: arr = [3,0,2,1,2], start = 2
// Output: false
// Explanation: There is no way to reach at index 1 with value 0.

// Constraints:

// 1 <= arr.length <= 5 * 104
// 0 <= arr[i] < arr.length
// 0 <= start < arr.length

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = (arr, start) => {
  const len = arr.length;
  const visistedArray = new Array(len).fill(false);

  const DFS = (i) => {
    if (i < 0 || i >= len || visistedArray[i]) return false;
    if (arr[i] === 0) return true;

    visistedArray[i] = true;

    return DFS(i + arr[i]) || DFS(i - arr[i]);
  };

  return DFS(start);
};

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5)); // true
assert.equal(canReach([4, 2, 3, 0, 3, 1, 2], 5), true);
assert.equal(canReach([4, 2, 3, 0, 3, 1, 2], 0), true);
assert.equal(canReach([3, 0, 2, 1, 2], 2), false);

// Explanation:
// Initialization:

// n: The length of the array arr.
// visited: An array to keep track of visited indices to avoid cycles.
// Depth-First Search (DFS) Function:

// dfs(i): A recursive function to explore the array from index i.
// Base Cases:
// If i is out of bounds or already visited, return false.
// If arr[i] === 0, return true.
// Mark as Visited:
// visited[i] = true: Mark the current index i as visited to avoid revisiting.
// Recursive Calls:
// dfs(i + arr[i]) || dfs(i - arr[i]): Explore both possible jumps (forward and backward) from the current index i.
// Start DFS:

// Call dfs(start) to begin the search from the given start index.
