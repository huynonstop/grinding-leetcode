/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.
 */
var rob = function (nums) {
  let memo = Array(nums.length).fill(-1);
  let topDown = (i) => {
    if (i < 0) return 0;
    if (memo[i] >= 0) return memo[i];
    memo[i] = Math.max(topDown(i - 2) + nums[i], topDown(i - 1));
    return memo[i];
  };
  return topDown(nums.length - 1);
};
var rob = function (nums) {
  if (nums.length === 0) return 0;
  let memo = Array(nums.length + 1);
  memo[0] = 0;
  memo[1] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    memo[i + 1] = Math.max(memo[i], memo[i - 1] + nums[i]);
  }
  return memo[nums.length];
};
var rob = function (nums) {
  if (nums.length === 0) return 0;
  prev1 = 0;
  prev2 = 0;
  for (let num of nums) {
    let t = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = t;
  }
  return prev1;
};
rob([1, 2, 3, 1]);
