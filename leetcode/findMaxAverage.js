/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let rs = sum;
  for (let i = 0; i < nums.length - k; i++) {
    sum += nums[i + k] - nums[i];
    rs = Math.max(rs, sum);
  }
  return rs / k;
};
findMaxAverage([1,12,-5,-6,50,3], 4)