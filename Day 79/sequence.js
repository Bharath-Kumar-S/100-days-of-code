// Given an array of ints, return True if the sequence of numbers 1, 2, 3 appears in the array somewhere.

// array123([1, 1, 2, 3, 1]) → True
// array123([1, 1, 2, 4, 1]) → False
// array123([1, 1, 2, 1, 2, 3]) → True

const assert = require("assert");

const array123 = (nums) => {
  let str = nums.join("");
  return str.includes("123");
};

assert.equal(array123([1, 1, 2, 3, 1]), true);
assert.equal(array123([1, 1, 2, 4, 1]), false);
assert.equal(array123([1, 1, 2, 1, 2, 3]), true);
