/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const rs = [];
  const dfs = (pre = '') => {
    if (pre.length === S.length) {
      rs.push(pre);
      return;
    }
    const index = pre.length;
    if (S[index].toLowerCase() !== S[index].toUpperCase()) {
      dfs(pre + S[index].toLowerCase());
      dfs(pre + S[index].toUpperCase());
    } else {
      dfs(pre + S[index]);
    }
  };
  dfs();
  return rs;
};
