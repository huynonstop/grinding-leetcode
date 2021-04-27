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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  const dfs = (node) => {
    if (!node) return null;
    node.left = dfs(node.left);
    node.right = dfs(node.right);
    if (node.val === 1 || node.left || node.right) return node;
    return null;
  };
  return dfs(root);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(
  0,
  null,
  new TreeNode(0, new TreeNode(0), new TreeNode(0))
);
pruneTree(root);
