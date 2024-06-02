// 6. Zigzag Conversion |M|

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

const assert = require("assert");
const convert = (s, numRows) => {
  if (numRows === 1 || numRows >= s.length) return s;
  let direction = false,
    count = 0,
    arr = new Array(numRows).fill("");
  for (let char of s) {
    arr[count] += char;
    if (count === 0 || count === numRows - 1) direction = !direction;
    direction ? count++ : count--;
  }
  return arr.join("");
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));

assert(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
