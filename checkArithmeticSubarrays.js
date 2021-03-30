/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */

// sort O(N*N*logN)
var checkArithmeticSubarrays = function (nums, l, r) {
  let rs = [];
  for (let i = 0; i < l.length; i++) {
    const subArray = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
    rs.push(checkArithmeticArray(subArray));
  }
  return rs;
};

const checkArithmeticArray = (array) => {
  const diff = array[0] - array[1];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] - array[i + 1] !== diff) {
      return false;
    }
  }
  return true;
};
checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]);

// patter O(N*N)
var checkArithmeticSubarrays = function (nums, l, r) {
  let rs = [];
  for (let i = 0; i < l.length; i++) {
    const subArray = nums.slice(l[i], r[i] + 1);
    rs.push(checkArithmeticArray(subArray));
  }
  return rs;
};
const checkArithmeticArray = (subArray) => {
  const set = new Set(subArray);
  let max = Math.max(...subArray),
    min = Math.min(...subArray);
  if (set.size !== subArray.length) return set.size === 1;
  if ((max - min) % (subArray.length - 1) !== 0) return false;
  let diff = (max - min) / (subArray.length - 1);
  for (let i = min; i <= max; i += diff) {
    if (!set.has(i)) return false;
  }
  return true;
};
