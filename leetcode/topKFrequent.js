/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Bucket sort
var topKFrequent = function (nums, k) {
  const counter = {};
  for (let c of nums) {
    if (!counter[c]) counter[c] = 0;
    counter[c]++;
  }
  const bucket = [];
  for (let k in counter) {
    const count = counter[k];
    if (!bucket[count]) bucket[count] = [];
    bucket[count].push(+k);
  }
  const rs = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      for (let n of bucket[i]) {
        rs.push(n);
        k--;
        if (k === 0) return rs;
      }
    }
  }
  return rs;
};

// QuickSelect https://leetcode.com/problems/top-k-frequent-elements/solution/
var topKFrequent = function (nums, k) {
  const counter = {};
  for (let c of nums) {
    if (!counter[c]) counter[c] = 0;
    counter[c]++;
  }
  const unique = [];
  for (let k in counter) {
    unique.push(+k);
  }
  const partition = (left, right) => {
    let pivot = left;
    for (let i = left; i <= right; i++) {
      if (counter[unique[i]] < counter[unique[right]]) {
        const t = unique[i];
        unique[i] = unique[pivot];
        unique[pivot] = t;
        pivot += 1;
      }
    }
    const t = unique[pivot];
    unique[pivot] = unique[right];
    unique[right] = t;
    return pivot;
  };
  const quickSelect = (left, right, kSmall) => {
    if (left >= right) return;
    const pivot = partition(left, right);
    if (kSmall === pivot) return;
    else if (kSmall < pivot) quickSelect(left, pivot - 1, kSmall);
    else quickSelect(pivot + 1, right, kSmall);
  };
  quickSelect(0, unique.length - 1, unique.length - k);
  return unique.slice(unique.length - k);
};
topKFrequent([1, 1, 1, 2, 2, 3], 2);
