// There is a string, , of lowercase English letters that is repeated infinitely many times.
//  Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

// Example

// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

const assert = require("assert");

const repeatedString = (s, n) => {
  const countInSingleString = (str) => {
    let count = 0;
    for (let char of str) {
      if (char === "a") {
        count++;
      }
    }
    return count;
  };

  const fullStringCount = Math.floor(n / s.length);
  const remainingString = n % s.length;
  const fullStringCountOfA = countInSingleString(s) * fullStringCount;
  const remainingStringCountOfA = countInSingleString(
    s.slice(0, remainingString)
  );
  return fullStringCountOfA + remainingStringCountOfA;
};

assert.equal(repeatedString("abcac", 10), 4);
assert.equal(repeatedString("aba", 10), 7);
assert.equal(repeatedString("a", 1000000000000), 1000000000000);

repeatedString("abcac", 10);
