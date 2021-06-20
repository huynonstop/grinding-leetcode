/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  let t = n;
  while (t) {
    if (t % 3 === 2) return false;
    if (t % 3 === 1) t -= 1;
    t /= 3;
  }
  return true;
};
