/**
 * @param {string} n
 * @return {number}
 */
//O(n)
var minPartitions = function (n) {
  let bucket = [0];
  for (let c of n) {
    bucket[c] = 1;
  }
  let rs = 0;
  let pre = 0;
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] !== 0) {
      rs = rs + i - pre;
      pre = i;
    }
  }
  return rs;
};
//Max digits
var minPartitions = function (n) {
  let max = 0;
  for (let c of n) {
    max = Math.max(+c, max);
  }
  return max;
};
minPartitions('32');
