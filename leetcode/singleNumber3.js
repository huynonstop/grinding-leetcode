/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/single-number-iii/discuss/68921/C%2B%2B-solution-O(n)-time-and-O(1)-space-easy-understaning-with-simple-explanation
 */
var singleNumber = function (nums) {
  let set = new Set(nums);
  let rs = new Set();
  for (let n of nums) {
    if (set.has(n) && !rs.has(n)) {
      set.delete(n);
      rs.add(n);
    } else if (rs.has(n)) {
      rs.delete(n);
    }
  }
  return Array.from(rs);
};

singleNumber([1, 2, 1, 3, 2, 5]);
