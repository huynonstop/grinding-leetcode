/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let dict = {};
  for (let i = 0; i < order.length; i++) {
    dict[order[i]] = i;
  }
  let compare = (word1, word2) => {
    if (word1 === word2) return 0;
    let length = Math.max(word1.length, word2.length);
    for (let i = 0; i < length; i++) {
      if (!word1[i]) return -1;
      if (!word2[i]) return 1;
      if (dict[word1[i]] > dict[word2[i]]) {
        return 1;
      } else if (dict[word1[i]] < dict[word2[i]]) {
        return -1;
      }
    }
  };
  for(let i = 0; i < words.length - 1;i++) {
    if(compare(words[i],words[i+1]) === 1) return false;
  }
  return true;
};
