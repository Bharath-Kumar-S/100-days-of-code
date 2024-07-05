// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

const assert = require("assert");

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  // Split the string by spaces to get an array of words
  let words = s.split(" ");

  // Reverse each word in the array
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }

  // Join the reversed words with spaces to form the final output string
  return words.join(" ");
};

assert.equal(
  reverseWords("Let's take LeetCode contest"),
  "s'teL ekat edoCteeL tsetnoc"
);
