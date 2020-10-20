/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length <= 1) return nums;
  let i = 1;
  let currentValue = nums[0];
  for(let j = 1;j< nums.length;j++) {
    if(nums[j] !== currentValue) {
      currentValue = nums[j];
      nums[i] = currentValue;
      i++;
    }
  }
  return i;
};