/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * https://leetcode.com/problems/implement-strstr/discuss/12956/C%2B%2B-Brute-Force-and-KMP
 * http://jakeboxer.com/blog/2009/12/13/the-knuth-morris-pratt-algorithm-in-my-own-words/
 * https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    while (haystack[i + j] === needle[j]) {
      if (i + j === haystack.length) return -1;
      if (j === needle.length - 1) return i;
      j++;
    }
  }
  return -1;
};
strStr('a', 'a');

var strStr = function (haystack, needle) {
  if (!needle) return 0;
  for (let i = 0; i <= haystack.length; i++) {
    for (let j = 0; j <= needle.length; j++) {
      if (j === needle.length) return i;
      if (i + j === haystack.length) return -1;
      if (haystack[i + j] !== needle[j]) break;
    }
  }
  return -1;
};
