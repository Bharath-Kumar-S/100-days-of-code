// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109

const assert = require("assert");

const largestNumbers = (nums) => {
  // convert to string
  nums = nums.map(String);

  // custom compare method
  nums.sort((a, b) => b + a - (a + b));

  // join the array
  nums = nums.join("");

  // base case
  return nums[0] === "0" ? "0" : nums;
};

assert.equal(largestNumbers([3, 30, 34, 5, 9]), "9534330");
assert.equal(largestNumbers([3, 30]), "330");
