/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let map = {};
  let rs = [];
  for (const num of nums) {
    if (!map[num]) map[num] = num;
    else rs.push(num);
  }
  return rs;
};

var findDuplicates = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) res.push(Math.abs(index + 1));
    nums[index] = -nums[index];
  }
  return rs;
};
findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
