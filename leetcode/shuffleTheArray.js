/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let rs  = [];
  let i = 0;
  while(i<n) {
    rs.push(nums[i])
    rs.push(nums[n+i])
    i++
  }
  return rs;
};