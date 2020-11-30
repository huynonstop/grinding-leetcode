/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let left = 0,
    right = n;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    let coin = Math.floor((mid * (mid + 1)) / 2);
    if (coin === n) return mid;
    if (n < coin) right = mid - 1;
    else left = mid + 1;
  }
  return right;
};

// 1+2+3+...+x = n
// -> (1+x)x/2 = n
// -> x^2+x = 2n
// -> x^2+x+1/4 = 2n +1/4
// -> (x+1/2)^2 = 2n +1/4
// -> (x+0.5) = sqrt(2n+0.25)
// -> x = -0.5 + sqrt(2n+0.25)
var arrangeCoins = function (n) {
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
};
