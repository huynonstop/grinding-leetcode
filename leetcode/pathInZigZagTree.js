/**
 * @param {number} label
 * @return {number[]}
 * https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/discuss/324011/Python-O(logn)-time-and-space-with-readable-code-and-step-by-step-explanation
 */
var pathInZigZagTree = function (label) {
  const path = [];
  let t = label;
  while (t) {
    path.push(t & 1);
    t = t >> 1;
  }
  let n = 1;
  let r = 1;
  let rs = [1];
  if (!(path.length & 1)) oppositeBit(path);
  for (let i = 1; i < path.length; i++) {
    r = (r << 1) + (path[path.length - 1 - i] ^ 1);
    n = (n << 1) + path[path.length - 1 - i];
    rs.push(i & 1 ? r : n);
  }
  return rs;
};

const oppositeBit = (bit) => {
  for (let i = 0; i < bit.length - 1; i++) {
    bit[i] ^= 1;
  }
};
// https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/discuss/323293/C%2B%2B-O(log-n)
var pathInZigZagTree = function (label) {
  let h = 0;
  while (1 << h <= label) ++h;
  const rs = [];
  while (h >= 1) {
    res[h - 1] = label;
    label = (1 << h) - 1 - label + (1 << (h - 1));
    label = label >> 1;
    --h;
  }
  return rs;
};
pathInZigZagTree(14);
