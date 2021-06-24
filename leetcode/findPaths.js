/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */

const M = 1000000007;
// Brute Force O(4 ^ M), n = maxMove
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const backtrack = (i, j, move) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return 1;
    if (!move) return 0;
    return (
      backtrack(i + 1, j, move - 1) +
      backtrack(i - 1, j, move - 1) +
      backtrack(i, j - 1, move - 1) +
      backtrack(i, j + 1, move - 1)
    );
  };
  return backtrack(startRow, startColumn, maxMove);
};

// dp O(mnM) O(mn)
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  if (!maxMove) return 0;
  let dp = [];
  for (let i = 0; i < m; i++) {
    dp.push([]);
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0;
      if (i === 0) dp[i][j]++;
      if (i === m - 1) dp[i][j]++;
      if (j === 0) dp[i][j]++;
      if (j === n - 1) dp[i][j]++;
    }
  }
  let rs = dp[startRow][startColumn];
  for (let i = 1; i < maxMove; i++) {
    dp = helper(dp, m, n);
    rs += dp[startRow][startColumn] % M;
  }
  return rs % M;
};

const helper = (dp, m, n) => {
  let newDP = [];
  for (let i = 0; i < m; i++) {
    newDP.push([]);
    for (let j = 0; j < n; j++) {
      newDP[i].push(0);
      if (i - 1 >= 0) newDP[i][j] += dp[i - 1][j] % M;
      if (i + 1 < m) newDP[i][j] += dp[i + 1][j] % M;
      if (j - 1 >= 0) newDP[i][j] += dp[i][j - 1] % M;
      if (j + 1 < n) newDP[i][j] += dp[i][j + 1] % M;
    }
  }
  return newDP;
};
// Memo O(nmM) - O(nmM)
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  if (!maxMove) return 0;
  let memo = [];
  for (let move = 0; move <= maxMove; move++) {
    memo.push([]);
    for (let i = 0; i < m; i++) {
      memo[move].push([]);
      for (let j = 0; j < n; j++) {
        memo[move][i][j] = -1;
        if (move === 1) {
          memo[move][i][j]++;
          if (i === 0) memo[move][i][j]++;
          if (i === m - 1) memo[move][i][j]++;
          if (j === 0) memo[move][i][j]++;
          if (j === n - 1) memo[move][i][j]++;
        }
      }
    }
  }
  let helper = (move, i, j) => {
    if (move === 0) return 0;
    if (i < 0 || j < 0 || i >= m || j >= n) return 0;
    if (dp[move][i][j] !== -1) {
      return dp[move][i][j];
    }
    memo[move][i][j] =
      ((helper(move - 1, i - 1, j) % M) +
        (helper(move - 1, i + 1, j) % M) +
        (helper(move - 1, i, j - 1) % M) +
        (helper(move - 1, i, j + 1) % M)) %
      M;
    helper(move - 1, i, j);
    return memo[move][i][j];
  };
  helper(maxMove, startRow, startColumn);
  let rs = 0;
  for (let move = 1; move <= maxMove; move++) {
    rs += memo[move][startRow][startColumn];
  }
  return rs % M;
};

var findPaths = function (m, n, maxMove, startRow, startColumn) {
  if (!maxMove) return 0;
  let memo = [];
  for (let move = 0; move <= maxMove + 1; move++) {
    memo.push([]);
    for (let i = 0; i < m; i++) {
      memo[move].push([]);
      for (let j = 0; j < n; j++) {
        memo[move][i][j] = -1;
      }
    }
  }
  let helper = (move, i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return 1;
    if (move === 0) return 0;
    if (memo[move][i][j] !== -1) {
      return memo[move][i][j];
    }
    memo[move][i][j] =
      ((helper(move - 1, i - 1, j) % M) +
        (helper(move - 1, i + 1, j) % M) +
        (helper(move - 1, i, j - 1) % M) +
        (helper(move - 1, i, j + 1) % M)) %
      M;
    return memo[move][i][j];
  };
  return helper(maxMove, startRow, startColumn);
};
findPaths(2, 2, 2, 0, 0);
