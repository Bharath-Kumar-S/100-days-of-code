// Modify and return the given map as follows: if the key "a" has a value,
// set the key "b" to have that same value.
// In all cases remove the key "c", leaving the rest of the map unchanged.

// mapShare({"a": "aaa", "b": "bbb", "c": "ccc"}) → {"a": "aaa", "b": "aaa"}
// mapShare({"b": "xyz", "c": "ccc"}) → {"b": "xyz"}
// mapShare({"a": "aaa", "c": "meh", "d": "hi"}) → {"a": "aaa", "b": "aaa", "d": "hi"}
const mapShare = (map) => {
  if (map.has("a")) {
    map.set("b", map.get("a"));
  }

  map.delete("c");

  return map;
};

const assert = require("assert");
assert.deepEqual(
  mapShare(
    new Map([
      ["a", "aaa"],
      ["b", "bbb"],
      ["c", "ccc"],
    ])
  ),
  new Map([
    ["a", "aaa"],
    ["b", "aaa"],
  ])
);
assert.deepEqual(
  mapShare(
    new Map([
      ["b", "xyz"],
      ["c", "ccc"],
    ])
  ),
  new Map([["b", "xyz"]])
);
assert.deepEqual(
  mapShare(
    new Map([
      ["a", "aaa"],
      ["c", "meh"],
      ["d", "hi"],
    ])
  ),
  new Map([
    ["a", "aaa"],
    ["b", "aaa"],
    ["d", "hi"],
  ])
);
console.log("All test cases passed!");
