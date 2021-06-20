/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let a = s.split('');
  for (let start = 0; start < s.length; start += 2 * k) {
    let i = start,
      j = Math.min(start + k - 1, a.length - 1);
    while (i < j) {
      let tmp = a[i];
      a[i++] = a[j];
      a[j--] = tmp;
    }
  }
  return a.join('');
};
reverseStr('abcdefg', 2);
