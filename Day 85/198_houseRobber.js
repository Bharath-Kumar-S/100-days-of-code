const rob = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prev1 = 0; // conatins max money including the current house
  let prev2 = 0; // contains max money excluding the current

  for (let i = 0; i < nums.length; i++) {
    let temp = prev1;
    prev1 = Math.max(prev1, nums[i] + prev2);
    prev2 = temp;
  }

  return prev1;
};

const assert = require("assert");
assert.equal(rob([1, 2, 3, 1]), 4);
assert.equal(rob([2, 7, 9, 3, 1]), 12);
console.log("All test cases passed!");
