/**
 * @param {number[]} cost
 * @return {number}
 * https://leetcode.com/problems/min-cost-climbing-stairs/discuss/476388/4-ways-or-Step-by-step-from-Recursion-greater-top-down-DP-greater-bottom-up-DP-greater-fine-tuning
 */
var minCostClimbingStairs = function (cost) {
  let f1 = cost[0],
    f2 = cost[1];
  for (let i = 2; i < cost.length; i++) {
    let t = cost[i] + Math.min(f1, f2);
    f2 = f1;
    f1 = t;
  }
  return Math.min(f1, f2);
};

var minCostClimbingStairs = function (cost) {
  let f1 = 0,
    f2 = 0;
  for (let i = cost.length - 1; i >= 0; i--) {
    let t = cost[i] + Math.min(f1, f2);
    f1 = f2;
    f2 = t;
  }
  return Math.min(f1, f2);
};
