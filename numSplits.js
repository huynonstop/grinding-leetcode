/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  if (s.length === 1) return 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  const set = new Set();
  let rs = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const cur = s[i];
    const count = map.get(cur) - 1;
    set.add(cur);
    if (!count) map.delete(cur);
    else map.set(cur, count);
    if (set.size === map.size) rs++;
  }
  return rs;
};

numSplits('aacaba');
