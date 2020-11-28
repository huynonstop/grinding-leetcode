/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let counts = Array(N).fill(0);
  for (let [truster, trusted] of trust) {
    counts[truster - 1]--;
    counts[trusted - 1]++;
  }
  let judge = -1;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === N - 1) {
      if (judge !== -1) return -1;
      judge = i + 1;
    }
  }
  return judge;
};
