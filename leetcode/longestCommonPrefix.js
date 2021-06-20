/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = '';
  let fS = strs.pop() || '';
  for(let i = 0;i < fS.length;i++) {
    for(let s of strs) {
      if(fS[i] !== s[i]) return prefix; 
    }
    prefix += fS[i];
  }
  return prefix;
};

longestCommonPrefix(["flower","flow","flight"])