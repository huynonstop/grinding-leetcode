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
var minDiffInBST = function(root) {
  let min = Number.MAX_SAFE_INTEGER;
  let prev = null;
  const inOrder = (node) => {
    if(!node) return null;
    inOrder(node.left);
    if(prev) min = Math.min(node.val - prev, min);
    prev = node.val;
    inOrder(node.right);
    return min;
  }
  return inOrder(root);
};