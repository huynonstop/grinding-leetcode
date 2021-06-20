/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => a - b);
  let rs = 0;
  for(let i = piles.length/3; i < piles.length; i+=2) {
    rs += piles[i];
  }
  return rs;
};
