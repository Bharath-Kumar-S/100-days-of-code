const trappingRainWater = (height) => {
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let answer = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(height[left], leftMax);
      answer += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(height[right], rightMax);
      answer += rightMax - height[right];
      right--;
    }
  }

  return answer;
};

const assert = require("assert");
assert.equal(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
//                             1
//             1               1   1       1
// _   1   _   1   1   _   1   1   1   1   1   1
assert.equal(trappingRainWater([4, 2, 0, 3, 2, 5]), 9);
//                     1
// 1                   1
// 1           1       1
// 1   1       1   1   1
// 1   1   _   1   1   1
assert.equal(trappingRainWater([1, 2, 3, 4, 5]), 0);
//                 1
//             1   1
//         1   1   1
//     1   1   1   1
// 1   1   1   1   1
assert.equal(trappingRainWater([5, 4, 3, 2, 1]), 0);
// 1
// 1   1
// 1   1   1
// 1   1   1   1
// 1   1   1   1   1
assert.equal(trappingRainWater([1, 2, 3, 2, 1]), 0);
//         1
//     1   1   1
// 1   1   1   1   1
assert.equal(trappingRainWater([3, 2, 1, 2, 3]), 4);
// 1               1
// 1   1       1   1
// 1   1   1   1   1
console.log("All test cases passed!");
