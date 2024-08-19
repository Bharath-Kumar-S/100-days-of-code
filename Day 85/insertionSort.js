const arr = [1, 2, 4, 45, 623, 23, 45, 65, 6, 576];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
};

const assert = require("assert");
assert.deepEqual(insertionSort(arr), [1, 2, 4, 6, 23, 45, 45, 65, 576, 623]);
console.log("All test cases passed!");
