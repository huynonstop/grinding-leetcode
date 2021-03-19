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
var sumEvenGrandparent = function (root) {
  return dfs(root, null, null);
};

var dfs = (node, parent, grandParent) => {
  if (!node) return 0;
  let isValidGrandParent = grandParent && grandParent.val % 2 === 0;
  let val = isValidGrandParent ? node.val : 0;
  return val + dfs(node.left, node, parent) + dfs(node.right, node, parent);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
