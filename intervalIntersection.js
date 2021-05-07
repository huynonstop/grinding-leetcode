/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let i = 0;
  let j = 0;
  let rs = [];
  while (i < firstList.length && j < secondList.length) {
    const [a, b] = firstList[i];
    const [c, d] = secondList[j];
    const lo = Math.max(a, c);
    const hi = Math.min(b, d);
    if (lo <= hi) {
      rs.push([lo, hi]);
    }
    if (b < d) {
      i++;
    } else {
      j++;
    }
  }
  return rs;
};
