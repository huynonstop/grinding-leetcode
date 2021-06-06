/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 * https://leetcode.com/problems/search-suggestions-system/discuss/436151/JavaPython-3-Simple-Trie-and-Binary-Search-codes-w-comment-and-brief-analysis.
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  const root = { prefix: '', words: [] };
  for (let p of products) {
    root.words.push(p);
    let cur = root;
    for (let c of p) {
      if (!cur[c]) cur[c] = {};
      cur = cur[c];
      if (!cur.words) cur.words = [];
      cur.words.push(p);
    }
  }
  const rs = [];
  let cur = root;
  for (let c of searchWord) {
    cur = cur[c] || { prefix: '', words: [] };
    rs.push(cur.words.slice(0, 3));
  }
  return rs;
};
suggestedProducts(['havana'], 'tatiana');
