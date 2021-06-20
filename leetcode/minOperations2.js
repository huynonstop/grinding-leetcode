/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let rs = 0;
  for (let i = 0; i < (n - 1) / 2; i++) {
    rs = rs + n - 2 * i - 1;
  }
  return rs;
};
var minOperations = function (n) {
  return n*n/4
};
minOperations(3)