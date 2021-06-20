/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 * https://leetcode.com/problems/find-and-replace-pattern/discuss/161775/Short-python-isomorphism-solution
 * https://leetcode.com/problems/find-and-replace-pattern/discuss/161288/C%2B%2BJavaPython-Normalise-Word
 */

var findAndReplacePattern = function (words, pattern) {
  return words.filter((w) => checkPattern(w, pattern));
};

const checkPattern = (word, pattern) => {
  const map = new Map();
  const set = new Set();
  for (let i = 0; i < pattern.length; i++) {
    const t = map.get(pattern[i]);
    if (!t) {
      if (set.has(word[i])) return false;
      map.set(pattern[i], word[i]);
      set.add(word[i]);
    } else if (t !== word[i]) {
      return false;
    }
  }
  return true;
};
checkPattern('ccc', 'abb');
checkPattern('mee', 'abb');
checkPattern('dkd', 'abb');
