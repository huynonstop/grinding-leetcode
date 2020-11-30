/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (!s) return false;
  let ss = (s + s).slice(1, -1);
  return ss.indexOf(s) !== -1;
};
