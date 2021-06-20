/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let counters = new Map();
  let rs = 0;
  for (let domino of dominoes) {
    domino.sort();
    const k = domino.join('');
    const c = counters.get(k) || 0;
    rs += c;
    counters.set(k, c + 1);
  }
  return rs;
};
