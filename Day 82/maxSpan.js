// Consider the leftmost and righmost appearances of some value in an array.
//  We'll say that the "span" is the number of elements between the two inclusive.
//   A single value has a span of 1. Returns the largest span found in the given array.
//   (Efficiency is not a priority.)

// maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

const maxSpan = (arr) => {
  let max = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     let j = arr.lastIndexOf(arr[i]);
  //     let span = j - i + 1;
  //     max = Math.max(max, span);
  //   }

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > 0; j--) {
      if (arr[i] === arr[j]) {
        let span = j - i + 1;
        max = Math.max(max, span);
        break;
      }
    }
  }
  return max;
};

const assert = require("assert");
assert.equal(maxSpan([1, 2, 1, 1, 3]), 4);
assert.equal(maxSpan([1, 4, 2, 1, 4, 1, 4]), 6);
assert.equal(maxSpan([1, 4, 2, 1, 4, 4, 4]), 6);
console.log("All test cases passed!");
