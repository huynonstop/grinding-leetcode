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
var distributeCoins = function (root) {
  let rs = 0;
  const postOrder = (node) => {
    if (!node) return 0;
    const l = postOrder(node.left);
    const r = postOrder(node.right);
    rs += Math.abs(l) + Math.abs(r);
    return node.val + l + r - 1;
  };
  postOrder(root);
  return rs;
};
