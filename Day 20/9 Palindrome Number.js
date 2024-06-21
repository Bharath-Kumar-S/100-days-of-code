const assert = require("assert");

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  // Negative numbers and numbers ending with 0 (but not 0 itself) are not palindromes
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversed = 0;
  let original = x;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
};

assert.equal(isPalindrome(121), true);
assert.equal(isPalindrome(-121), false);
assert.equal(isPalindrome(10), false);
