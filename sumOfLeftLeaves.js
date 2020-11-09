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
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  const dfs = (node, k) => {
    if (!node) return;
    if (!node.left && !node.right) sum += node.val * k;
    dfs(node.left, 1);
    dfs(node.right, 0);
  };
  dfs(root, 0);
  return sum;
};

var sumOfLeftLeaves = function (root, k = 0) {
  if (!node) return 0;
  if (!node.left && !node.right && k !== 0) return root.val;
  return sumOfLeftLeaves(root.left, 1) + sumOfLeftLeaves(root.right, 0);
};
