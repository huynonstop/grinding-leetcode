/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 * https://leetcode.com/problems/sort-integers-by-the-power-value/discuss/546491/Python-Heap
 */
var getKth = function (lo, hi, k) {
  let power = [0, 1];
  let value = [];
  const dp = (num) => {
    if (!power[num] && num & 1) {
      power[num] = 1 + dp(3 * num + 1);
    }
    if (!power[num] && !(num & 1)) {
      power[num] = 1 + dp(num >> 1);
    }
    return power[num];
  };
  for (let i = lo; i <= hi; i++) {
    value.push([i, dp(i)]);
  }
  return value.sort((a, b) => a[1] - b[1])[k - 1][0];
};
getKth(12, 15, 2);
