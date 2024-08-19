const arr = [1, 56, 34, 89, 60, 23, 55, 56];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

const assert = require("assert");
assert.deepEqual(selectionSort(arr), [1, 23, 34, 45, 55, 56, 56, 60, 67, 89]);
console.log("All test cases passed!");
