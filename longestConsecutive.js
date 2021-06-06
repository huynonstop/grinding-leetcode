/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  const seen = new Set();
  let rs = 0;
  for (let n of nums) {
    if (!seen.has(n)) {
      seen.add(n);
      let max = n;
      let min = n;
      while (set.has(max + 1)) {
        max++;
        seen.add(max);
      }
      while (set.has(min - 1)) {
        min--;
        seen.add(min);
      }
      rs = Math.max(rs, max - min + 1);
    }
  }
  return rs;
};

var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let rs = 0;
  for (let n of nums) {
    if (!set.has(n - 1)) {
      let cur = n;
      let streak = 1;
      while (set.has(++cur)) {
        streak++;
      }
      rs = Math.max(rs, streak);
    }
  }
  return rs;
};
longestConsecutive([100, 4, 200, 1, 3, 2]);
