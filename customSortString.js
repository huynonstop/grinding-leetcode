/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function (order, str) {
  const o = {};
  for (let i = 0; i < order.length; i++) {
    o[order[i]] = i + 1;
  }
  return str
    .split('')
    .sort((a, b) => o[a] - o[b])
    .join('');
};
customSortString('cba', 'abcd');
