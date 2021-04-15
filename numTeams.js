/**
 * @param {number[]} rating
 * @return {number}
 * https://leetcode.com/problems/count-number-of-teams/discuss/554795/C%2B%2BJava-O(n-*-n)-and-O(n-log-n)
 */
var numTeams = function (rating) {
  let rs = 0;
  for (let i = 1; i < rating.length - 1; i++) {
    let smaller = [0, 0];
    let greater = [0, 0];
    for (let j = 0; j < rating.size(); j++) {
      let rl = j > i ? 1 : 0;
      if (rating[i] < rating[j]) {
        smaller[rl]++;
      }
      if (rating[i] > rating[j]) {
        greater[rl]++;
      }
    }
    rs += smaller[0] * greater[1] + greater[0] * smaller[1];
  }
  return rs;
};
