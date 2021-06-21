/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let rs = [[1]];
  for (let i = 1; i < numRows; i++) {
    let pre = rs[i - 1];
    let cur = [1];
    for (let j = 1; j < i; j++) {
      cur.push(pre[j] + pre[j - 1]);
    }
    cur.push(1);
    rs.push(cur);
  }
  return rs;
};
