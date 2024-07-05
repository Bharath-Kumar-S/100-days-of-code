const assert = require("assert");

const matchingStrings = (stringList, queries) => {
  // Write your code here
  let strSet = new Map();
  for (const s of stringList) {
    if (strSet.has(s)) {
      strSet.set(s, strSet.get(s) + 1);
    } else {
      strSet.set(s, 1);
    }
  }
  const result = queries.map((query) => strSet.get(query) || 0);

  return result;
};

assert.deepEqual(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]),
  [2, 1, 0]
);
