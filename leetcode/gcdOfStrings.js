/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/discuss/303781/JavaPython-3-3-codes-each
 */
var gcdOfStrings = function(str1, str2) {
  return str1 + str2 === str2 + str1 ? str1.substr(0,gcd(str1.length,str2.length)) : '';
};

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}