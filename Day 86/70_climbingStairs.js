const climbingStairs = (n) => {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const assert = require("assert");
assert.equal(climbingStairs(2), 2);
assert.equal(climbingStairs(3), 3);
assert.equal(climbingStairs(4), 5);
console.log("All test cases passed!");
