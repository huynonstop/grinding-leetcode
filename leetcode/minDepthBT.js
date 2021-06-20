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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var minDepth = function (root) {
  if (!root) return 0;
  let left = 0,
    right = 0;
  if (root.left) left = minDepth(root.left);
  if (root.right) right = minDepth(root.right);
  return 1 + (Math.min(left, right) || Math.max(left, right));
};
minDepth(
  new TreeNode(
    2,
    null,
    new TreeNode(
      3,
      null,
      new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
    )
  )
);
