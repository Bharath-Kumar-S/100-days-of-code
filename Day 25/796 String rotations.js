/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  // Check if the lengths of the strings are the same
  if (s.length !== goal.length) {
    return false;
  }

  // Concatenate the string s with itself
  let doubledString = s + s;

  // Check if goal is a substring of the concatenated string
  return doubledString.includes(goal);
};

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
