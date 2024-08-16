// Write a function that replaces the words in `raw` with the words in `code_words` such that the first occurrence of each word in `raw` is assigned the first unassigned word in `code_words`.

// encoder(["a"], ["1", "2", "3", "4"]) → ["1"]
// encoder(["a", "b"], ["1", "2", "3", "4"]) → ["1", "2"]
// encoder(["a", "b", "a"], ["1", "2", "3", "4"]) → ["1", "2", "1"]

const encoder = (raw, code_words) => {
  let map = new Map();

  for (let i = 0; i <= raw.length; i++) {
    if (!map.has(raw[i])) {
      map.set(raw[i], code_words[i]);
    }
  }

  let res = [];
  for (let word of raw) {
    res.push(map.get(word));
  }
  return res;
};

const assert = require("assert");
assert.deepEqual(encoder(["a"], ["1", "2", "3", "4"]), ["1"]);
assert.deepEqual(encoder(["a", "b"], ["1", "2", "3", "4"]), ["1", "2"]);
assert.deepEqual(encoder(["a", "b", "a"], ["1", "2", "3", "4"]), [
  "1",
  "2",
  "1",
]);
