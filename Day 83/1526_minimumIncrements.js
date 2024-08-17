/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  let operations = target[0];
  for (let i = 1; i < target.length; i++) {
    if (target[i] > target[i - 1]) {
      operations += target[i] - target[i - 1];
    }
  }
  return operations;
};

const assert = require("assert");
// assert.equal(minNumberOperations([1, 2, 3, 2]), 3);
assert.equal(minNumberOperations([3, 1, 1, 2]), 4);
// assert.equal(minNumberOperations([3, 1, 5, 4, 2]), 7);
console.log("All test cases passed!");
