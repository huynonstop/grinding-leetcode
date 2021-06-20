/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let rs = [];
  let li = -1;
  for (let i = 0; i < nums.length; i++) {
    if (li === -1 && nums[i] + 1 === nums[i + 1]) {
      li = i;
    } else if (li === -1) {
      rs.push(`${nums[i]}`);
      li = -1;
    } else if (nums[i] + 1 !== nums[i + 1]) {
      rs.push(`${nums[li]}->${nums[i]}`);
      li = -1;
    }
  }
  return rs;
};
summaryRanges([0, 1, 2, 4, 5, 7]);
