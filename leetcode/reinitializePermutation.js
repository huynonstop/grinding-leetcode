/**
 * @param {number} n
 * @return {number}
 * https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/discuss/1130660/Python-O(n)%3A-Full-proof-find-the-multiplicative-order-of-2
 * https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/discuss/1130534/JavaC%2B%2BPython-6-lines-O(1)-Space
 */
var reinitializePermutation = function (n) {
  let res = 0,
    i = 1;
  while (res == 0 || i > 1) {
    i = (i * 2) % (n - 1);
    res++;
  }
  return res;
};
