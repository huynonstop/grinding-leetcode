/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let count = 0;
  const chars = ['a', 'e', 'i', 'o', 'u'];
  const backtrack = (l, c) => {
    if (l == 0) {
      count++;
      return;
    }
    for (const char of chars) {
      if (char >= c) {
        backtrack(l - 1, char);
      }
    }
  };
  for (const char of chars) {
    backtrack(n - 1, char);
  }
  return count;
};

// https://leetcode.com/problems/count-sorted-vowel-strings/discuss/1021493/One-line-solution-or-Math-or-No-DP-no-Big-Integers-or-O(1)-time-space
var countVowelStrings = function (n) {
  return ((n + 1) * (n + 2) * (n + 3) * (n + 4)) / 24;
};
countVowelStrings(3);
