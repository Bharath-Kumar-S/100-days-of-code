// Given a string, return the sum of the numbers appearing in the string,
// ignoring all other characters. A number is a series of 1 or more digit chars in a row.
// (Note: Character.isDigit(char) tests if a char is one of the chars '0', '1', .. '9'.
// Integer.parseInt(string) converts a string to an int.)

// sumNumbers("abc123xyz") → 123
// sumNumbers("aa11b33") → 44
// sumNumbers("7 11") → 18

const sumNumbers = (str) => {
  let sum = 0,
    current = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      current += str[i];
    } else {
      if (current.length > 0) {
        sum += parseInt(current);
        current = "";
      }
    }
  }
  if (current.length > 0) {
    sum += parseInt(current);
  }
  return sum;
};

const assert = require("assert");
assert.equal(sumNumbers("abc123xyz"), 123);
assert.equal(sumNumbers("aa11b33"), 44);
assert.equal(sumNumbers("7 11"), 18);
console.log("All test cases passed!");
