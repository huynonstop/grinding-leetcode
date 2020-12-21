/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let cur = Math.floor((left + right) / 2);
    if (target === nums[cur]) return cur;
    else if (nums[cur] < target) left = cur + 1;
    else right = cur - 1;
  }
  return left;
};
// for duplicate
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let cur = Math.floor((left + right) / 2);
    if (nums[cur] < target) left = cur + 1;
    else right = cur - 1;
  }
  return left;
};
searchInsert([1, 3, 5, 6], 5);
