/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0) return 0;
  let nums = [0, 1];
  let max = 1;
  let e = Math.floor(n / 2);
  for (let i = 1; i <= e; i++) {
    nums[2 * i] = nums[i];
    nums[2 * i + 1] = nums[i] + nums[i + 1];
    if (2 * i + 1 <= n) max = Math.max(max, nums[2 * i + 1]);
  }
  return max;
};
getMaximumGenerated(3);
