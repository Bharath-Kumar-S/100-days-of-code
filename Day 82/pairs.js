// Given an array of non-empty strings,
// create and return a Map<String, String> as follows:
//  for each string add its first character as a key with its last character as the value.

// pairs(["code", "bug"]) → {"b": "g", "c": "e"}
// pairs(["man", "moon", "main"]) → {"m": "n"}
// pairs(["man", "moon", "good", "night"]) → {"g": "d", "m": "n", "n": "t"}

const pairs = (arr) => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i][0], arr[i][arr[i].length - 1]);
  }

  return map;
};

const assert = require("assert");
assert.deepEqual(
  pairs(["code", "bug"]),
  new Map([
    ["b", "g"],
    ["c", "e"],
  ])
);
assert.deepEqual(pairs(["man", "moon", "main"]), new Map([["m", "n"]]));
assert.deepEqual(
  pairs(["man", "moon", "good", "night"]),
  new Map([
    ["g", "d"],
    ["m", "n"],
    ["n", "t"],
  ])
);
console.log("All test cases passed!");
