/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  const fibo = [1, 1];
  while (k > fibo[fibo.length - 1]) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  let t = k;
  let rs = 0;
  for (let i = fibo.length - 1; t !== 0; i--) {
    if (t >= fibo[i]) {
      rs += Math.floor(t / fibo[i]);
      t = t % fibo[i];
    }
  }
  return rs;
};

// https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/discuss/585632/JavaC%2B%2BPython-Easy-Prove
var findMinFibonacciNumbers = function (k) {
  if (k < 2) return k;
  let [a, b] = [1, 1];
  while (b <= k) {
    [a, b] = [b, a + b];
  }
  return 1 + findMinFibonacciNumbers(k - a);
};

var findMinFibonacciNumbers = function (k) {
  let [rs, a, b] = [0, 1, 1];
  while (b <= k) {
    [a, b] = [b, a + b];
  }
  while (a > 0) {
    if (a <= k) {
      k -= a;
      rs += 1;
    }
    [a, b] = [b - a, a];
  }
  return rs;
};
findMinFibonacciNumbers(7);
