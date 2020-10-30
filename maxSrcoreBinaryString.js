// Max( zeroL + oneR )
// =Max( zeroL - oneL + oneL + oneR )
// =Max( zeroL - oneL ) + oneTotal
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let count = (i,j,v) => {
    let rs = 0;
    for(let idx = i; idx < j;idx++) {
      if(s[idx] === v) rs++;
    }
    return rs;
  }
  let max = -s.length;
  for(let i = 1; i < s.length;i++) {
    max = Math.max(count(0,i,'0') + count(i,s.length,'1'), max);
  }
  return max;
}
maxScore(
  "011101")

var maxScore = function(s) {
  let c1 = 0;
  for(let i = 0; i < s.length; i++) {
      if(s[i] == '1') c1++;
  }
  let max = 0;
  let c2 = 0;
  for(let i = 0; i < s.length - 1; i++) {
      if(s[i] == '0') c2++;
      else c1--;
      max = Math.max(max, c1 + c2);
  }
  return max;
}

var maxScore = function(s) {
  let zeros = 0, ones = 0, max = -s.length;
  for(let i = 0;i < s.length;i++) {
    if(s[i] === '0') zeros++;
    else ones++;
    if(i !== s.length - 1) {
      max = Math.max(zeros - ones, max);
    }
  }
  return max + ones;
};