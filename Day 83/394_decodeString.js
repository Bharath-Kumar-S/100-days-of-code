/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (const char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = "";
    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }
    let num = "";
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join("");
};

const assert = require("assert");
assert.equal(decodeString("3[a]2[bc]"), "aaabcbc");
assert.equal(decodeString("3[a2[c]]"), "accaccacc");
assert.equal(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef");
console.log("All test cases passed!");
