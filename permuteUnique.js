/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const rs = [];
  const set = new Set();
  const temp = [];
  nums.sort((a, b) => a - b);
  const bt = () => {
    if (set.size === nums.length) {
      rs.push([...temp]);
    } else
      for (let i = 0; i < nums.length; i++) {
        if (set.has(i) || (i > 0 && nums[i] === nums[i - 1] && !set.has(i - 1)))
          // By using nums[i-1]==nums[i] && !used[i-1], we can make sure that 1b cannot be choosed before 1a
          continue;
        set.add(i);
        temp.push(nums[i]);
        bt();
        temp.pop();
        set.delete(i);
      }
  };
  bt();
  return rs;
};
permuteUnique([1, 1, 2]);
