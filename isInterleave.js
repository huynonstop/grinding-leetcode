/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3, i = 0, j = 0) {
  if (s1.length + s2.length !== s3.length) return false;
  const helper = (i = 0, j = 0) => {
    if (i < s1.length && j < s2.length) {
      if (s1[i] === s3[i + j] && s2[j] === s3[i + j]) {
        return helper(i + 1, j) || helper(i, j + 1);
      }
      if (s1[i] === s3[i + j]) {
        return helper(i + 1, j);
      } else if (s2[j] === s3[i + j]) {
        return helper(i, j + 1);
      } else {
        return false;
      }
    }
    if (i < s1.length) {
      if (s1[i] === s3[i + j]) {
        return helper(i + 1, j);
      } else {
        return false;
      }
    }
    if (j < s2.length) {
      if (s2[j] === s3[i + j]) {
        return helper(i, j + 1);
      } else {
        return false;
      }
    }
    return true;
  };
  return helper();
};

var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const helper = (i = 0, j = 0) => {
    if (i === s1.length && j === s2.length) return true;
    let rs = false;
    if (i < s1.length) {
      if (s1[i] === s3[i + j]) {
        rs = rs || helper(i + 1, j);
      }
    }
    if (j < s2.length) {
      if (s2[j] === s3[i + j]) {
        rs = rs || helper(i, j + 1);
      }
    }
    return rs;
  };
  return helper();
};

var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  let memo = [];
  const helper = (i = 0, j = 0) => {
    if (!memo[i]) memo[i] = [];
    if (i === s1.length && j === s2.length) return true;
    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }
    let rs = false;
    if (i < s1.length) {
      if (s1[i] === s3[i + j]) {
        rs = rs || helper(i + 1, j);
      }
    }
    if (j < s2.length) {
      if (s2[j] === s3[i + j]) {
        rs = rs || helper(i, j + 1);
      }
    }
    memo[i][j] = rs;
    return rs;
  };
  return helper();
};
//    j   0   1   2   3   4   5
// i|   | _ | d | b | b | c | a |
//  |---|---|---|---|---|---|---|
// 0| _ | T | F | F | F | F | F |
// 1| a | T | F | F | F | F | F |
// 2| a | T | T | T | T | T | F |
// 3| b | F | T | T | F | T | F |
// 4| c | F | F | T | T | T | T |
// 5| c | F | F | F | T | f | T |

// 0 1 2 3 4 5 6 7 8 9 10
//   a a d b b c b c a c
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  let dp = [];
  // 1 index
  for (let i = 0; i <= s1.length; i++) {
    dp.push([]);
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = true;
      } else if (i == 0) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
      } else if (j == 0) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
      } else {
        dp[i][j] = // (top && cur) || (left && cur)
          (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
          (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
      }
    }
  }
  return dp[s1.length][s2.length];
};
//    j   0   1   2   3   4   5
// i|   | _ | d | b | b | c | a |
//  |---|---|---|---|---|---|---|
// 0| _ | T | F | F | F | F | F |
// 1| a | T | F | F | F | F | F |
// 2| a | T | T | T | T | T | F |
// 3| b | F | T | T | F | T | F |
// 4| c | F | F | T | T | T | T |
// 5| c | F | F | F | T | f | T |

// 0 1 2 3 4 5 6 7 8 9 10
//   a a d b b c b c a c
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  let dp = [];
  // 1 index
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0 && j === 0) {
        dp[j] = true;
      } else if (i == 0) {
        dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
      } else if (j == 0) {
        dp[0] = dp[0] && s1[i - 1] === s3[i - 1];
      } else {
        dp[j] = // (top && cur) || (left && cur)
          (dp[j] && s1[i - 1] === s3[i + j - 1]) ||
          (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
      }
    }
  }
  return dp[s2.length];
};

isInterleave('aabcc', 'dbbca', 'aadbbcbcac');
