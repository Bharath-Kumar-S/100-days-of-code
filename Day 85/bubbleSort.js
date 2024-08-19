const a = [1, 23, 45, 67, 8, 9];

const bubbleSot = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const assert = require("assert");
assert.deepEqual(bubbleSot(a), [1, 8, 9, 23, 45, 67]);
console.log("All test cases passed!");
