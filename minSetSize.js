/**
 * @param {number[]} arr
 * @return {number}
 * https://leetcode.com/problems/reduce-array-size-to-the-half/discuss/496500/Hash-Map-and-Multiset
 */
var minSetSize = function (arr) {
  let map = new Map();
  for (const n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const mapArr = Array.from(map).sort((a, b) => b[1] - a[1]);
  let t = 0;
  for (let i = 0; i < mapArr.length; i++) {
    t += mapArr[i][1];
    if (t >= arr.length >> 1) return i + 1;
  }
  return 0;
};

var minSetSize = arr => {
  const LEN = arr.length;
  if (LEN < 3) return 1;

  const max = Math.max(...arr);
  const freq = new Uint16Array(max + 1);
  let maxFreq = 0;
  for (const val of arr) ++freq[val] > maxFreq && (maxFreq = freq[val]);

  const freqBased = new Uint32Array(maxFreq + 1);
  for (const val of freq) ++freqBased[val];

  let step = 0;
  let sum = 0;
  for (let i = maxFreq; i >= 1; --i) {
    while (freqBased[i]--) {
      sum += i;
      ++step;
      if (sum >= LEN / 2) return step;
    }
  }
};

minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]);
