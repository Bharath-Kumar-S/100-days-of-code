/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  //fifo

  for (let char of s) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else {
      let prev = stack.pop();
      if (
        (prev === "{" && char !== "}") ||
        (prev === "[" && char !== "]") ||
        (prev === "(" && char !== ")") ||
        prev === undefined
      )
        return false;
    }
  }

  return stack.length === 0;
};
