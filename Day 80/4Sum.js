/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  // sort array
  nums.sort((a, b) => a - b);

  // result array
  let result = [];

  // length
  let n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
          while (nums[k] === nums[k + 1]) k++;
          while (nums[l] === nums[l - 1]) l--;
          k++;
          l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};

const assert = require("assert");

assert.equal(
  fourSum([1, 0, -1, 0, -2, 2], 0).length,
  3,
  "First test case failed"
);
assert.equal(fourSum([2, 2, 2, 2, 2], 8).length, 1, "Second test case failed");
console.log("All test cases passed");
