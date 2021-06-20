/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let rs = 0;
  for (let c of costs) {
    coins -= c;
    if (coins < 0) {
      return rs;
    }
    rs++;
  }
  return rs;
};
