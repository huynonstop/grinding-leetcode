/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/discuss/969535/JavaPython-3-Prefix-Sum-O(n)-code-w-brief-explanation-and-analysis.
 * https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/discuss/969519/C%2B%2B-Explain
 */

// res[i] = (nums[i] - nums[0]) + (nums[i] - nums[1]) + ... + (nums[i] - nums[i - 1])        <--- absolute difference of nums[i] with first i numbers
//      + (nums[i] - nums[i]) + (nums[i + 1] - nums[i]) + (nums[i + 2] - nums[i]) + ... + (nums[n - 1] - nums[i])   <--- absolute difference of nums[i] with last n - i numbers

// res[i] = i * nums[i] - (nums[0] + ... + nums[i - 1])        <--- absolute difference of nums[i] with first i numbers
//      + (nums[i + 1] + ... + nums[n]) - (n - i) * nums[i]   <--- absolute difference of nums[i] with last n - i numbers

// res[i] = i * nums[i] - prefixSum[i]
//      + prefixSum[n] - prefixSum[i] - (n - i) * nums[i]
var getSumAbsoluteDifferences = function (nums) {
  let rs = [];
  let prefixSum = [0];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
  }
  for (let i = 0; i < n; i++) {
    rs[i] =
      i * nums[i] -
      prefixSum[i] +
      (prefixSum[n] - prefixSum[i] - (n - i) * nums[i]);
  }
  return rs;
};
getSumAbsoluteDifferences([2, 3, 5]);
