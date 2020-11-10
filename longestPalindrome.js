/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let hashmap = new Map();
  for (const c of s) {
    let count = hashmap.get(c) || 0;
    hashmap.set(c, count + 1);
  }
  let rs = 0;
  let maxOdd = 0;
  hashmap.forEach((count) => {
    if (count % 2 === 0) {
      rs += count;
    } else if (count > maxOdd) {
      if (maxOdd !== 0) rs -= 1;
      maxOdd = count;
      rs += count;
    } else {
      rs += count - 1;
    }
  });
  return rs;
};

var longestPalindrome = function (s) {
  let hashmap = new Map();
  for (const c of s) {
    let count = hashmap.get(c) || 0;
    hashmap.set(c, count + 1);
  }
  let rs = 0;
  hashmap.forEach((count) => {
    rs += Math.floor(count / 2) * 2;
  });
  return Math.min(rs + 1, s.length);
};

var longestPalindrome = function (s) {
  let hashmap = new Map();
  for (const c of s) {
    let count = hashmap.get(c) || 0;
    hashmap.set(c, count + 1);
  }
  let rs = 0;
  let oddFlag = 0;
  hashmap.forEach((count) => {
    if (!oddFlag && count % 2 === 1) oddFlag = 1;
    rs += Math.floor(count / 2) * 2;
  });
  return rs + oddFlag;
};
longestPalindrome('abccccdd');
