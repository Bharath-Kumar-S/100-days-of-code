// Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.

// canBalance([1, 1, 1, 2, 1]) → true
// canBalance([2, 1, 1, 2, 1]) → false
// canBalance([10, 10]) → true

const canBalance = (nums = new Array()) => {
  let total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === total - sum) {
      return true;
    }
    // stops from iterating when sum is more then total
    if (sum > total - sum) {
      console.log("breaking");
      break;
    }
  }
  return false;
};

const assert = require("assert");
assert.equal(canBalance([1, 1, 1, 2, 1]), true);
assert.equal(canBalance([2, 1, 1, 2, 1]), false);
assert.equal(canBalance([10, 10]), true);
assert.equal(canBalance([10]), false);
console.log("All test cases passed!");
