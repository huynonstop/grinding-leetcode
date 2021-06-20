/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  let bannedSet = new Set(banned);
  let words = paragraph.split(/\W+/);
  let hashmap = new Map();
  let max = '';
  for (const word of words) {
    let key = word.toLowerCase();
    if (!bannedSet.has(key)) {
      let c = hashmap.get(key) || 0;
      hashmap.set(key, c + 1);
      if (!hashmap.has(max) || hashmap.get(key) > hashmap.get(max)) max = key;
    }
  }
  return max;
};
mostCommonWord('a, a, a, a, b,b,b,c, c', [
  'a',
]);
