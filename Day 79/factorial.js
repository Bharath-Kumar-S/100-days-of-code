//compute factorial

// Examples
// Input: 4
// Output: 24
// Input: 8
// Output: 40320

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const assert = require("assert");
assert.equal(factorial(4), 24);
assert.equal(factorial(8), 40320);
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);
assert.equal(factorial(5), 120);
assert.equal(factorial(6), 720);
