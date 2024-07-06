// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

const assert = require("assert");

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  let jumps = 0; // Number of jumps made
  let currentEnd = 0; // End of the current segment
  let farthest = 0; // Farthest point that can be reached

  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest point that can be reached
    farthest = Math.max(farthest, i + nums[i]);

    // If we have reached the end of the current segment,
    // we need to make a jump
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
};

assert.equal(jump([2, 3, 1, 1, 4]), 2);
assert.equal(jump([2, 3, 0, 1, 4]), 2);
assert.equal(jump([0]), 0);
