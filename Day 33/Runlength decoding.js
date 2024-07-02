// ip: 4a3b2c1a
// op: aaaabbbcca

const assert = require("assert");

const runLengthDecoding = (input) => {
  if (input.length === 0) return "";
  let result = "";
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    // checks if the char is not number
    if (isNaN(input[i])) {
      result += input[i].repeat(count);
      count = 0;
    } else {
      count = count * 10 + parseInt(input[i]);
      //   This handles cases where numbers have more than one digit.
      //  For example, if the input is "12a",
      // the loop will first read '1' (count becomes 1),
      //  then '2' (count becomes 12).
    }
  }
  return result;
};

assert.equal(runLengthDecoding("4a3b2c1a"), "aaaabbbcca");
assert.equal(runLengthDecoding("1x1y1z"), "xyz");
assert.equal(runLengthDecoding("15a"), "aaaaaaaaaaaaaaa");
