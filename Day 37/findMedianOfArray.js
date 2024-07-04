const assert = require("assert");

function findMedian(arr) {
  // sort the array
  arr = arr.sort((a, b) => a - b);
  console.log(arr, Math.round(arr.length / 2));
  if (arr.length % 2 !== 0) {
    return arr[Math.round(arr.length / 2) - 1];
  } else {
    return Math.round((arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2);
  }
}

assert.equal(findMedian([1, 2, 3, 4]), 3);
assert.equal(findMedian([1, 2, 3]), 2);
