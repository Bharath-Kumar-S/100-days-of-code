// 7. Reverse Integer |M|

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

const assert = require("assert");

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let y = Math.abs(x);
  let res = 0;
  while (y > 0) {
    let ld = y % 10;
    y = parseInt(y / 10);
    res = res * 10 + ld;
    if (res > Math.pow(2, 31) - 1) {
      return 0;
    }
  }
  return x < 0 ? -res : res;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));

assert.equal(reverse(123), 321);
assert.equal(reverse(-123), -321);
assert.equal(reverse(120), 21);
assert.equal(reverse(1534236469), 0);
