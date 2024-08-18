/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let median = 0.0;
  let combonedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  let length = combonedArray.length;
  if (length % 2 === 0) {
    const mid = length / 2;
    median = (combonedArray[mid] + combonedArray[mid - 1]) / 2;
  } else {
    median = combonedArray[Math.floor(length / 2)];
  }
  return median;
};

const assert = require("assert");
assert.strictEqual(
  findMedianSortedArrays([1, 3], [2]),
  2.0,
  "Failed to find the median"
);
assert.strictEqual(
  findMedianSortedArrays([1, 2], [3, 4]),
  2.5,
  "Failed to find the median"
);
console.log("All test cases passed");
