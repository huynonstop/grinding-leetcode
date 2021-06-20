/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/partition-array-for-maximum-sum/discuss/306945/DP-with-explanation
 * https://leetcode.com/problems/partition-array-for-maximum-sum/discuss/290863/JavaC%2B%2BPython-DP-O(K)-Space
 */
var maxSumAfterPartitioning = function (arr, k) {
  let dp = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    let maxPartition = 0;
    for (let j = 1; j <= k && j - 1 <= i; j++) {
      maxPartition = Math.max(maxPartition, arr[i - (j - 1)]);
      dp[i] = Math.max(dp[i], (i >= j ? dp[i - j] : 0) + j * maxPartition);
    }
  }
  return dp[arr.length - 1];
};

maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3);
