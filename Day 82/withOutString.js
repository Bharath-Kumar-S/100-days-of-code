// Given two strings, base and remove,
// return a version of the base string where all instances of the remove string have been removed (not case sensitive).
// You may assume that the remove string is length 1 or more.
// Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

// withoutString("Hello there", "llo") → "He there"
// withoutString("Hello there", "e") → "Hllo thr"
// withoutString("Hello there", "x") → "Hello there"

const withoutString = (base, remove) => {
  //   return base.replaceAll(remove, "");
  const regex = new RegExp(remove, "gi");
  return base.replace(regex, "");
};

const assert = require("assert");
assert.strictEqual(withoutString("Hello there", "llo"), "He there");
assert.strictEqual(withoutString("Hello there", "e"), "Hllo thr");
assert.strictEqual(withoutString("Hello there", "x"), "Hello there");
assert.strictEqual(withoutString("xxx", "x"), "");
assert.strictEqual(withoutString("xxx", "xx"), "x");
console.log("All test cases passed!");
