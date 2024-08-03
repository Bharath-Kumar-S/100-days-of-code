let arr = new Array(1000000).fill(0).map((_, i) => i + 1);

const simpleLoop = (arr) => {
  let t1 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1000000 - 1) {
      console.log(arr[i]);
    }
  }
  let t2 = performance.now();
  console.log(`Time taken: ${(t2 - t1) / 1000} seconds`);
};

simpleLoop(arr);
console.log("-----------------");

const binarySearch = (arr, target) => {
  let t1 = performance.now();
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      console.log("Found");
      break;
    } else if (mid < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  let t2 = performance.now();
  console.log(`Time taken: ${(t2 - t1) / 1000} seconds`);
};

binarySearch(arr, 1000000 - 1);
console.log("-----------------");
