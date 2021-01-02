/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * https://leetcode.com/problems/reverse-bits/solution/
 */
var reverseBits = function (n) {
  let sum = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    sum = sum * 2 + +n[i];
  }
  return sum;
};
var reverseBits = function (n) {
  let left = 32;
  let sum = 0;
  while (n !== 0) {
    sum = sum * 2 + (n % 2);
    n = Math.floor(n / 2);
    left--;
  }
  return sum * Math.pow(2, left);
};
reverseBits(00000010100101000001111010011100);
