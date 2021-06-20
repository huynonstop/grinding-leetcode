/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let hashmap = new Map();
  for (const v of magazine) {
    let c = hashmap.get(v) + 1 || 1;
    hashmap.set(v, c);
  }
  for (const v of ransomNote) {
    let c = hashmap.get(v);
    if (!c) return false;
    hashmap.set(v, c - 1);
  }
  return true;
};
