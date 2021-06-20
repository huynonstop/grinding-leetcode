/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let rs = [];
  let helper = (pre, open, close) => {
    if (open === 0 && close === 0) {
      return rs.push(pre);
    }
    if (open > 0) helper(pre + '(', open - 1, close);
    if (close > open) helper(pre + ')', open, close - 1);
  };
  helper('', n, n);
  return rs;
};
var generateParenthesis = function (n) {
  let rs = [];
  if (n === 0) {
    return [''];
  }
  for (let i = 0; i < n; i++)
    for (let left of generateParenthesis(i))
      for (let right of generateParenthesis(n - i - c))
        rs.push('(' + left + ')' + right);
  return rs;
};

generateParenthesis(3);
