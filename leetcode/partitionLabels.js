/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let last = {};
  for (let i = 0; i < S.length; i++) {
    last[S[i]] = i;
  }
  let ans = [];
  let j = 0,
    anchor = 0;
  for (let i = 0; i < S.length; i++) {
    j = Math.max(j, last[S[i]]);
    if (i === j) {
      ans.push(i - anchor + 1);
      anchor = i + 1;
    }
  }
  return ans;
};
