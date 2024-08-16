function collapseDuplicates(a) {
  let i = 0;
  let result = "";

  while (i < a.length) {
    let ch = a.charAt(i);
    result += ch;

    while (i + 1 < a.length && a.charAt(i + 1) === ch) {
      i++;
    }

    i++;
  }

  return result;
}

const assert = require("assert");
assert.equal(collapseDuplicates("zzzcaaabbb"), "zcab");
assert.equal(collapseDuplicates("a"), "a");
assert.equal(collapseDuplicates(""), "");
assert.equal(collapseDuplicates("aa"), "a");
console.log("All test cases passed!");
