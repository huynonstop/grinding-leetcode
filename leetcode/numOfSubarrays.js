/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */

// sliding window
var numOfSubArrays = function (arr, k, threshold) {
  let sum_threshold = k * threshold;
  let sum = arr.slice(0, k).reduce((p, c) => p + c);
  let rs = sum >= sum_threshold ? 1 : 0;
  for (let i = 1; i + k - 1 < arr.length; i++) {
    sum = sum - arr[i - 1] + arr[i + k - 1];
    if (sum >= sum_threshold) rs++;
  }
  return rs;
};
var numOfSubArrays = function (arr, k, threshold) {
  let sum_threshold = k * threshold;
  let sum = 0;
  let rs = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k) {
      s -= arr[i - k];
      if (sum >= sum_threshold) rs++;
    }
  }
  return rs;
};
// Prefix Sum:
var numOfSubArrays = function (arr, k, threshold) {
  const sum_threshold = k * threshold;
  const prefixSum = [0];
  let rs = 0;
  for (let i = 0; i < arr.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + a[i];
  }
  for (let i = 0; i + k - 1 < arr.length; i++) {
    if (prefixSum[i + k] - prefixSum[i] >= sum_threshold) ++rs;
  }
  return rs;
};

numOfSubArrays([7, 7, 7, 7, 7, 7, 7], 7, 7);
