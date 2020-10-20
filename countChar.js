/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let rs = 0;
  let charsHash = new Map();
  for(let c of chars) {
    charsHash.set(c, charsHash.get(c) + 1 || 1)
  }
  for(let w of words) {
    let cloneHash = new Map(charsHash);
    let count = 0;
    for(let c of w) {
      if(cloneHash.get(c) > 0) {
        cloneHash.set(c, cloneHash.get(c) - 1)
        count++;
      } else if (!cloneHash.get(c)) {
          break;
      }
    }
    if(count === w.length) {
      rs += count;
    }
  }
  return rs;
};
countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach');
