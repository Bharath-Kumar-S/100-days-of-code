// 13 Roman to integer |E|

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

const assert = require("assert");

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (string) => {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const strLen = string.length;
  let total = 0;

  // Loop through the letters
  for (let i = 0; i < strLen; i++) {
    // Check if the current letter is followed by one with a higher value (indicating a deduction)
    if (numerals[string[i + 1]] > numerals[string[i]]) {
      // Remove the current letter's numeric value from the total
      total -= numerals[string[i]];
    } else {
      // Add the current letter's numeric value to the total
      total += numerals[string[i]];
    }
  }

  return total;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));

assert.equal(romanToInt("MCMXCIV"), 1994);
assert.equal(romanToInt("LVIII"), 58);
