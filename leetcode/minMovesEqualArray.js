/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
 */
var minMoves = function (nums) {
  let min = Number.MAX_VALUE;
  let sum = nums.reduce((p, c) => {
    if (c < min) min = c;
    return p + c;
  }, 0);
  return sum - min * nums.length;
};
