/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const rs = [];
  const set = new Set();
  const bt = () => {
    for (const n of nums) {
      if (!set.has(n)) {
        if (set.size + 1 < nums.length) {
          set.add(n);
          bt();
        } else {
          rs.push(Array.from(set).concat(n));
        }
        set.delete(n);
      }
    }
  };
  bt();
  return rs;
};

var permute = function (nums) {
  const rs = [];
  const set = new Set();
  const bt = () => {
    if (set.size === nums.length) {
      rs.push(Array.from(set));
    } else
      for (const n of nums) {
        if (!set.has(n)) {
          set.add(n);
          bt();
          set.delete(n);
        }
      }
  };
  bt();
  return rs;
};
permute([1, 2, 3]);
