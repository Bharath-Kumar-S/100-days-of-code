// Return the "centered" average of an array of ints, which we'll say is the mean average of the values,
// except ignoring the largest and smallest values in the array.
// If there are multiple copies of the smallest value, ignore just one copy, and likewise for the largest value.
// Use int division to produce the final average. You may assume that the array is length 3 or more.

const centered_average = (nums) => {
  //   let max = Math.max(...nums);
  //   let min = Math.min(...nums);
  //   let sum = 0;
  //   let count = 0;

  //   for (let num of nums) {
  //     if (num !== max && num !== min) {
  //       sum += num;
  //       count++;
  //     }
  //   }

  //   return Math.floor(sum / count);
  nums.sort((a, b) => a - b);
  nums.pop();
  nums.shift();
  return Math.floor(nums.reduce((a, b) => a + b) / nums.length);
};

const assert = require("assert");

assert.equal(centered_average([1, 2, 3, 4, 100]), 3);
assert.equal(centered_average([1, 1, 5, 5, 10, 8, 7]), 5);
assert.equal(centered_average([-10, -4, -2, -4, -2, 0]), -3);
assert.equal(centered_average([5, 3, 4, 6, 2]), 4);
