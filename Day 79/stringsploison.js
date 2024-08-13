// Given a non-empty string like "Code" return a string like "CCoCodCode".

// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

const stringSplosion = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.slice(0, i + 1);
  }
  return result;
};

const assert = require("assert");
assert.strictEqual(stringSplosion("Code"), "CCoCodCode");
assert.strictEqual(stringSplosion("abc"), "aababc");
assert.strictEqual(stringSplosion("ab"), "aab");
