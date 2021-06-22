/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const durations = [1, 7, 30];
  const n = days.length;
  let memo = [];
  const dp = (i) => {
    if (i >= n) return 0;
    if (memo[i] !== undefined) return memo[i];
    let ans = Infinity;
    let j = i;
    while (j < days.length && days[j] < days[i] + durations[0]) j++;
    ans = Math.min(ans, dp(j) + costs[0]);
    while (j < days.length && days[j] < days[i] + durations[1]) j++;
    ans = Math.min(ans, dp(j) + costs[1]);
    while (j < days.length && days[j] < days[i] + durations[2]) j++;
    ans = Math.min(ans, dp(j) + costs[2]);
    memo[i] = ans;
    return ans;
  };
  return dp(0);
};

var mincostTickets = function (days, costs) {
  const durations = [1, 7, 30];
  let memo = [];
  const daySet = new Set(days);
  const dp = (i) => {
    if (i > 365) return 0;
    if (memo[i] !== undefined) return memo[i];
    let ans = null;
    if (daySet.has(i)) {
      ans = Math.min(
        dp(i + durations[0]) + costs[0],
        dp(i + durations[1]) + costs[1],
        dp(i + durations[2]) + costs[2]
      );
    } else {
      ans = dp(i + 1);
    }
    memo[i] = ans;
    return ans;
  };
  return dp(days[0]);
};

// https://leetcode.com/problems/minimum-cost-for-tickets/discuss/226659/Two-DP-solutions-with-pictures
