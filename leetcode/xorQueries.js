/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
//  A Xor A = 0
//  A Xor 0 = A
 
//  Xor[0, i] ^ Xor [i, j] = Xor [0, j]
//  Xor[0, i] ^ Xor [i, j] ^ Xor[0, i] = Xor[0, j] ^ Xor[0, i] = Xor[i, j]

var xorQueries = function (arr, queries) {
  const n = arr.length;
  const rs = [];
  for (let i = 0; i < n; i++) arr[i] ^= arr[i - 1];
  for (let [i, j] of queries) {
    rs.push(i === 0 ? arr[j] : arr[i - 1] ^ arr[j]);
  }
  return rs;
};
xorQueries(
  [1, 3, 4, 8],
  [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 3],
  ]
);

var xorQueries = function (arr, queries) {
  const n = arr.length;
  const rs = [];
  const dp_table = [...Array(n)].map((_) => Array(n));
  const dp = (s, e) => {
    if (!dp_table[s][e]) {
      dp_table[s][e] = s === e ? arr[s] : dp(s, e - 1) ^ dp(e, e);
    }
    return dp_table[s][e];
  };

  for (let [s, e] of queries) {
    rs.push(dp(s, e));
  }
  return rs;
};
xorQueries(
  [1, 3, 4, 8],
  [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 3],
  ]
);
