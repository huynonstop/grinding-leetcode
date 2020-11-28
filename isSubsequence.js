/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * https://leetcode.com/problems/is-subsequence/discuss/87302/Binary-search-solution-for-follow-up-with-detailed-comments
 */
var isSubsequence = function (s, t) {
  let si = 0;
  let ti = 0;
  while (ti < t.length) {
    if (t[ti++] === s[si]) {
      si++;
    }
  }
  return si === s.length;
};
isSubsequence('abc', 'ahbgdc');
