/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const map = {};
  let rs = 0;
  for (const c of s) {
    const pre = map[c] || 0;
    map[c] = pre + 1;
  }
  for (const c of t) {
    if (map[c]) {
      map[c]--;
    } else {
      rs++;
    }
  }
  return rs;
};

var minSteps = function (s, t) {
  const map = {};
  let rs = 0;
  for (let i = 0; i < s.length; i++) {
    const preS = map[s[i]] || 0;
    map[s[i]] = preS + 1;

    const preT = map[t[i]] || 0;
    map[t[i]] = preT - 1;
  }
  for (const k in map) {
    if (map[k] < 0) rs -= map[k];
  }
  return rs;
};
minSteps('anagram', 'mangaar');
