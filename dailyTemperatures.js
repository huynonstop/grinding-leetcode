/**
 * @param {number[]} temperatures
 * @return {number[]}
 * https://leetcode.com/problems/daily-temperatures/discuss/109832/Java-Easy-AC-Solution-with-Stack
 */
var dailyTemperatures = function (temperatures) {
  let rs = [];
  rs[temperatures.length - 1] = 0;
  for (let i = temperatures.length - 2; i >= 0; i--) {
    let next = i + 1;
    while (rs[next]) {
      if (temperatures[next] > temperatures[i]) break;
      next += rs[next];
    }
    if (temperatures[next] > temperatures[i]) rs[i] = next - i;
    else rs[i] = 0;
  }
  return rs;
};
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
