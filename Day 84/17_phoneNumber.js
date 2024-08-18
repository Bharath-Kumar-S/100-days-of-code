/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits, start = 0) {
  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (digits === "") return [];
  if (start >= digits.length) return [""];

  const digit = digits[start];
  const letters = map[digit];
  const result = [];

  const combinations = letterCombinations(digits, start + 1);

  for (const letter of letters) {
    for (const combination of combinations) {
      result.push(letter + combination);
    }
  }

  return result;
};

const assert = require("assert");
assert.deepEqual(letterCombinations("23"), [
  "ad",
  "ae",
  "af",
  "bd",
  "be",
  "bf",
  "cd",
  "ce",
  "cf",
]);
assert.deepEqual(letterCombinations("2"), ["a", "b", "c"]);
console.log("All test cases passed!");
