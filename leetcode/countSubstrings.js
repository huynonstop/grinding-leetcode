/**
 * @param {string} s
 * @return {number}
 */
// Brute force O(n^3)

var countSubstrings = function (s) {
  // O(n^2)
  let count = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    for (let l = i, r = i; l >= 0 && r < n && s[l] === s[r]; l--, r++) {
      count++;
    }
    for (let l = i, r = i + 1; l >= 0 && r < n && s[l] === s[r]; l--, r++) {
      count++;
    }
  }
  return count;
};
countSubstrings('abc');
