// Return an array that contains the sorted values from the input array with duplicates removed.

// sort([]) → []
// sort([1]) → [1]
// sort([1, 1]) → [1]

const sort = (arr) => {
  arr.sort((a, b) => a - b);
  //   return Array.from(new Set(arr));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

const assert = require("assert");
assert.deepEqual(sort([]), []);
assert.deepEqual(sort([1]), [1]);
assert.deepEqual(sort([1, 1]), [1]);
assert.deepEqual(sort([1, 2]), [1, 2]);
assert.deepEqual(sort([2, 1, 5, 3, 2, 1]), [1, 2, 3, 5]);
console.log("All test cases passed!");
