/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * https://leetcode.com/problems/check-if-a-string-can-break-another-string/discuss/674072/Java-2-approaches.-O(nlogn)-and-O(n).
 * https://leetcode.com/problems/check-if-a-string-can-break-another-string/submissions/
 */
var checkIfCanBreak = function (s1, s2) {
  const countMap1 = new Map();
  const countMap2 = new Map();
  for (let i = 0; i < s1.length; i++) {
    countMap1.set(s1[i], (countMap1.get(s1[i]) || 0) + 1);
    countMap2.set(s2[i], (countMap2.get(s2[i]) || 0) + 1);
  }
  return check(countMap1, countMap2) || check(countMap2, countMap1);
};

var check = (c1, c2) => {
  let s = 0;
  for (let c of 'abcdefghijklmnopqrstuvwxyz') {
    s = s + (c1.get(c) || 0) - (c2.get(c) || 0);
    if (s < 0) return false;
  }
  return true;
};
