// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (nums, target) => {
  const hm = new Map();
  for (let i = 0; ; i++) {
    if (hm.has(target - nums[i])) {
      return [hm.get(target - nums[i]), i];
    }
    hm.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
