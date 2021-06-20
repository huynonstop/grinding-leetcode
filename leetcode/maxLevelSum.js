/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let height = {};
  const dfs = (node, h = 1) => {
    if (!node) return;
    height[h] = (height[h] || 0) + node.val;
    dfs(node.left, h + 1);
    dfs(node.right, h + 1);
  };
  dfs(root);
  let max = 1;
  for (let k in height) {
    if (height[max] < height[k]) max = k;
  }
  return max;
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(
  1,
  new TreeNode(7, new TreeNode(7), new TreeNode(-8), new TreeNode(0))
);
maxLevelSum(root);

// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/discuss/360968/JavaPython-3-Two-codes-language%3A-BFS-level-traversal-and-DFS-level-sum.
// def maxLevelSum(self, root: TreeNode) -> int:
// ans, q, depth = (-math.inf, 0), [root], -1
// while q:
//     ans = max(ans, (sum(node.val for node in q), depth))
//     q = [kid for node in q for kid in (node.left, node.right) if kid]
//     depth -= 1
// return -ans[1]