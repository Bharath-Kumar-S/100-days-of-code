const assert = require("assert");

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      let prevValue = stack.pop();
      if (prevValue === "(" && char !== ")") return false;
      if (prevValue === "{" && char !== "}") return false;
      if (prevValue === "[" && char !== "]") return false;
      if (prevValue === undefined) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("]"));
assert.equal(isValid("()[]{}"), true);
assert.equal(isValid("([)]"), false);
assert.equal(isValid("{[]}"), true);
assert.equal(isValid("]"), false);
