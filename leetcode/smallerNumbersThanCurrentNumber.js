/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let index = nums.reduce((p, c, i) => {
    p[c] ? p[c].push(i) : (p[c] = [i]);
    return p;
  }, {});
  nums.sort((a, b) => a - b);
  let rs = Array(nums.length);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      index[nums[i]].forEach((idx) => {
        rs[idx] = count;
      });
    }
    count++;
  }
  return rs;
};

var smallerNumbersThanCurrent = function (nums) {
  let bucket = Array(101).fill(0);
  let res = Array(nums.length);
  for (let i = 0; i < nums.length; i++) bucket[nums[i]]++;
  for (let i = 1; i <= 100; i++) {
    bucket[i] += bucket[i - 1];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) res[i] = 0;
    else res[i] = bucket[nums[i] - 1];
  }
  return res;
};
