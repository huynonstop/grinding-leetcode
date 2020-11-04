/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min = Number.MAX_SAFE_INTEGER;
  let prev = null;
  let inOrder = (node) => {
    if (!node) return min;
    inOrder(node.left);
    if (prev !== null) min = Math.min(min, node.val - prev);
    prev = node.val;
    inOrder(node.right);
    return min;
  };
  return inOrder(root);
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
getMinimumDifference(
  new TreeNode(1, null, new TreeNode(3, new TreeNode(2, null, null), null))
);
