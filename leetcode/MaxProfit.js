/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let i = 0;
  let peak = prices[0];
  let valley = prices[0];
  while(i < prices.length - 1) {
    while(i < prices.length - 1 && prices[i] >= prices[i+1]) i++
    valley = prices[i]
    while(i < prices.length - 1 && prices[i] <= prices[i+1]) i++
    peak = prices[i]
    res += peak - valley;
  }
  return res
};
/**
 * Best practice
 * var maxProfit = function(prices) {
 *  let res = 0;
 *  for(let i = 1;i<prices.length;i++) {
 *    if(prices[i] > prices[i-1]) {
 *      res += prices[i] - prices[i-1] 
 *    }
 *  }
 *  return res
 * }
 */