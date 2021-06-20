/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  if (s === '') return s;
  let good_s = '';
  for (let i = 0; i < s.length; i++) {
    if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32) {
      i++;
    } else {
      good_s += s[i];
    }
  }
  if (s.length === good_s.length) {
    return good_s;
  }
  return makeGood(good_s);
};

var makeGood = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (
      stack.length !== 0 &&
      Math.abs(stack[stack.length - 1].charCodeAt(0) - s.charCodeAt(i)) === 32
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};

var makeGood = function (s) {
  let sArray = s.split('');
  let p = 0;
  for (let i = 0; i < s.length; ++i) {
    if (
      p > 0 &&
      Math.abs(sArray[i].charCodeAt(0) - sArray[p - 1].charCodeAt(0)) == 32
    )
      --p;
    else sArray[p++] = sArray[i];
  }
  return sArray.join('').substr(0, p);
};
makeGood('leEeetcode');
