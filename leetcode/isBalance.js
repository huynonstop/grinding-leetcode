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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  let depth = (node) => {
    if (!node) return 0;
    return Math.max(depth(node.left), depth(node.right)) + 1;
  };
  let left = depth(root.left);
  let right = depth(root.right);
  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

var isBalanced = function (root) {
  let depth = (node) => {
    if (!node) return 0;
    let leftHeight = depth(node.left);
    if (leftHeight == -1) return -1;
    let rightHeight = depth(node.right);
    if (rightHeight == -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    return 1 + Math.max(leftHeight, rightHeight);
  };
  return depth(root) !== -1;
};
