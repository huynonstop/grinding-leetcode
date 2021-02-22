/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!isAlpha(s[i])) {
      i++;
    }
    else if (!isAlpha(s[j])) {
      j--
    }
    else if (s[i++].toLowerCase() !== s[j--].toLowerCase()) {
      return false;
    }
  }
  return true;
};

function isAlpha(c) {
  return c.length === 1 && c.match(/[a-z0-9]/i);
}

isPalindrome('0P');
