/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let original = x;
  let t = 0;
  while (x !== 0) {
    t = t * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return t === original;
};

var isPalindrome = function (x) {
  if (x === 0) return true;
  if (x < 0 || x % 10 === 0) return false;
  let t = 0;
  while (x > t) {
    t = t * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (t === x) return true;
  return t === x * 10 + (t % 10);
};
isPalindrome(10);
