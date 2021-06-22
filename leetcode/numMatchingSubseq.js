/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let rs = 0;
  let set = new Set(s);
  let ts = transform(s);
  const isMatch = (ts1, ts2) => {
    if (ts2.length > ts1.length) return false;
    let j = 0;
    for (let i = 0; i < ts1.length && j < ts2.length; i++) {
      if (!set.has(ts2[j][0])) return false;
      if (ts2[j][0] === ts1[i][0] && ts2[j][1] <= ts1[i][1]) {
        j++;
      }
    }
    return j === ts2.length;
  };

  for (let w of words) {
    let tw = transform(w);
    if (isMatch(ts, tw)) rs++;
  }
  return rs;
};

const transform = (s) => {
  let ts = [[s[0], 1]];
  for (let i = 1; i < s.length; i++) {
    if (ts[ts.length - 1][0] !== s[i]) {
      ts.push([s[i], 1]);
    } else {
      ts[ts.length - 1][1] += 1;
    }
  }
  return ts;
};
var numMatchingSubseq = function (s, words) {
  const ca = 'a'.charCodeAt(0);
  let a = [];
  for (let i = 0; i < s.length; i++) {
    if (!a[s.charCodeAt(i) - ca]) a[s.charCodeAt(i) - ca] = [];
    a[s.charCodeAt(i) - ca].push(i);
  }
  let rs = 0;
  for (let word of words) {
    let x = -1;
    let found = true;
    for (let i = 0; i < word.length; i++) {
      if (!a[word.charCodeAt(i) - ca]) {
        found = false;
        break;
      }
      let l = 0;
      let r = a[word.charCodeAt(i) - ca].length - 1;
      let ans = s.length;
      while (l <= r) {
        let mid = (l + r) >> 1;
        if (a[word.charCodeAt(i) - ca][mid] > x) {
          ans = a[word.charCodeAt(i) - ca][mid];
          r = mid - 1;
        } else {
          l = mid + 1;
        }
      }
      if (ans == s.length) {
        found = false;
        break;
      }
      x = ans;
    }
    if (found) rs++;
  }
  return rs;
};
numMatchingSubseq('abcde', ['a', 'bb', 'acd', 'ace']);
