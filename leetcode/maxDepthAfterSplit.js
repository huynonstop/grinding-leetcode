/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  const rs = [];
  let pre = nums[0];
  rs[nums.length - 1] = flip(pre, maximumBit);
  for (let i = 1; i < nums.length; i++) {
    pre = pre ^ nums[i];
    rs[nums.length - 1 - i] = flip(pre, maximumBit);
  }
  return rs;
};
const flip = (num, digit) => ~num & ((1 << digit) - 1);


var getMaximumXor = function (nums, maximumBit) {
  const max = (1 << maximumBit) - 1;
  const rs = [];
  let pre = nums[0];
  rs[nums.length - 1] = pre ^ max;
  for (let i = 1; i < nums.length; i++) {
    pre = pre ^ nums[i];
    rs[nums.length - 1 - i] = pre ^ max;
  }
  return rs;
};
