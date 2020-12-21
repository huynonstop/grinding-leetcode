/**
 * @param {number} num
 * @return {boolean}
 */

// 1 = 1
// 4 = 1 + 3
// 9 = 1 + 3 + 5
// 16 = 1 + 3 + 5 + 7
// 25 = 1 + 3 + 5 + 7 + 9
// 36 = 1 + 3 + 5 + 7 + 9 + 11
// ....
// so 1+3+...+(2n-1) = (2n-1 + 1)n/2 = nn
var isPerfectSquare = function (num) {
  let i = 1;
  while (num > 0) {
    num -= i;
    i += 2;
  }
  return num === 0;
};

// Binary search
var isPerfectSquare = function (num) {
  let right = num;
  let left = 1;
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (mid * mid === num) return true;
    else if (mid * mid > num) right = mid - 1;
    else left = mid + 1;
  }
  return false;
};
