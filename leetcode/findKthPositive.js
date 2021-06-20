/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  for (let i = 1, j = 0; i <= 1000 && j < arr.length; i++) {
    if (arr[j] == i) {
      j++;
    } else {
      k--;
      if (k == 0) {
        return i;
      }
    }
  }
  return arr[arr.length - 1] + k;
};

var findKthPositive = function (arr, k) {
  let l = 0,
    r = arr.length,
    m;
  while (l < r) {
    m = Math.floor((l + r) / 2);
    if (arr[m] - 1 - m < k) l = m + 1;
    else r = m;
  }
  return l + k;
};

var findKthPositive = function (arr, k) {
  let l = 0,
    r = arr.length - 1,
    m;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (arr[m] - m <= k) l = m + 1;
    else r = m;
  }
  return l + k;
};