// Given 2 int values greater than 0, return whichever value is nearest to 21 without going over. Return 0 if they both go over.

const assert = require("assert");

const blackJack = (a, b) => {
  if (a > 21 && b > 21) return 0;
  if (a > 21) return b;
  if (b > 21) return a;
  return Math.max(a, b);
};

assert.equal(blackJack(19, 21), 21);
assert.equal(blackJack(21, 19), 21);
assert.equal(blackJack(19, 22), 19);
assert.equal(blackJack(22, 19), 19);
assert.equal(blackJack(22, 22), 0);
assert.equal(blackJack(33, 1), 1);
