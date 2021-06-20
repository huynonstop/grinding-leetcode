/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let ans = {}
  for(str of strs) {
    let key = new Array(26).fill(0);
    for(c of str) {
      key[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    if(ans[key.toString()]) {
      ans[key.toString()].push(str);
    } else {
      ans[key.toString()] = [str]
    }
  }
  return Object.values(ans)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))