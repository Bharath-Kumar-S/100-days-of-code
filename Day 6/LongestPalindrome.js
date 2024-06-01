// 5. Longest Palindromic Substring |M|

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  // if (s.length <= 1) {
  //     return s;
  // }
  // let answer = '', answerLength = 0;
  // for (let i = 0; i < s.length; i++) {
  //     let left = i, right = i;
  //     while (left >= 0 && right < s.length && (s.charAt(left) === s.charAt(right))) {
  //         if ((right - left + 1) > answerLength) {
  //             answer = s.substring(left, right + 1)
  //             answerLength = right - left + 1;
  //         }
  //         left--;
  //         right++;
  //     }
  //     left = i, right = i + 1;
  //     while (left >= 0 && right < s.length && (s.charAt(left) === s.charAt(right))) {
  //         if ((right - left + 1) > answerLength) {
  //             answer = s.substring(left, right + 1)
  //             answerLength = right - left + 1;
  //         }
  //         left--;
  //         right++;
  //     }
  // }
  // return answer;

  if (s.length <= 1) {
    return s;
  }
  let answer = "",
    answerLength = 0;

  function expandAroundCenter(left, right) {
    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      if (right - left + 1 > answerLength) {
        answer = s.substring(left, right + 1);
        answerLength = right - left + 1;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // Odd-length palindromes
    expandAroundCenter(i, i);
    // Even-length palindromes
    expandAroundCenter(i, i + 1);
  }

  return answer;
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
