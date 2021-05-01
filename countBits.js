/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let rs = [0];
  for (let i = 1; i <= num; i++) {
    rs.push(rs[i >> 1] + (i & 1));
  }
  return rs;
};
countBits(5);
