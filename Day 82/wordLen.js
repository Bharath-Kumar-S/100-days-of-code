// Given an array of strings,
// return a Map<String, Integer> containing a key for every different string in the array,
//  and the value is that string's length.

// wordLen(["a", "bb", "a", "bb"]) → {"bb": 2, "a": 1}
// wordLen(["this", "and", "that", "and"]) → {"that": 4, "and": 3, "this": 4}
// wordLen(["code", "code", "code", "bug"]) → {"code": 4, "bug": 3}

const wordLen = (str) => {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], str[i].length);
    }
  }
  return map;
};

const assert = require("assert");
assert.deepEqual(
  wordLen(["a", "bb", "a", "bb"]),
  new Map([
    ["bb", 2],
    ["a", 1],
  ])
);
assert.deepEqual(
  wordLen(["this", "and", "that", "and"]),
  new Map([
    ["that", 4],
    ["and", 3],
    ["this", 4],
  ])
);
assert.deepEqual(
  wordLen(["code", "code", "code", "bug"]),
  new Map([
    ["code", 4],
    ["bug", 3],
  ])
);
console.log("All test cases passed!");
