// ip: aaaabbbcca
// op: 4a3b2c1a
const assert = require("assert");

const runLengthEncoding = (input) => {
  let result = "";
  let count = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      result += count + input[i - 1];
      count = 1;
    }
  }
  result += count + input[input.length - 1];
  return result;
};

assert.equal(runLengthEncoding("aaaabbbcca"), "4a3b2c1a");
assert.equal(runLengthEncoding("xyz"), "1x1y1z");
