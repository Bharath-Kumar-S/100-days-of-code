// 242 Anagram

const assert = require("assert");

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //basecase
  if (s.length !== t.length) return false;

  const count = {};

  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!count[t[i]]) return false;
    count[t[i]]--;
  }

  return Object.values(count).every((value) => value === 0);
};

assert.equal(isAnagram("anagram", "nagaram"), true);
assert.equal(isAnagram("rat", "car"), false);
assert.equal(isAnagram("aacc", "ccac"), false);
