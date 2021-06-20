/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let count = 0;
  while (a || b || c) {
    let la = a & 1;
    let lb = b & 1;
    let lc = c & 1;
    if ((la | lb) !== lc) {
      if (la === 1 && lb === 1) count += 2;
      else count += 1;
    }
    a = a >> 1;
    b = b >> 1;
    c = c >> 1;
  }
  return count;
};
minFlips(4, 2, 7);
// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/discuss/479998/C%2B%2B-bitwise-xor-solution-1-line
