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
var goodNodes = function (root) {
  let count = 0;
  const dfs = (node, max) => {
    if (!node) return;
    if (node.val >= max) {
      count++;
      max = node.val;
    }
    dfs(node.left, max);
    dfs(node.right, max);
  };
  dfs(root, root.val);
  return count;
};

var goodNodes = function (root) {
  const dfs = (node, max) => {
    if (!node) return 0;
    let count = 0;
    if (node.val >= max) {
      count++;
      max = node.val;
    }
    return count + dfs(node.left, max) + dfs(node.right, max);
  };
  return dfs(root, root.val);
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(
  3,
  new TreeNode(1, new TreeNode(3)),
  new TreeNode(4, new TreeNode(1), new TreeNode(5))
);
goodNodes(root);
