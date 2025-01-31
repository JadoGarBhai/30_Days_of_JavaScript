/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(false);
  dp[0] = true;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && j + nums[j] >= i) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n - 1];
};