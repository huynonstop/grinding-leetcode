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
var lcaDeepestLeaves = function (root) {
  let deepest = 1;
  let rs = root;
  const postOrder = (node, d = 1) => {
    if (!node) return d;
    const left = postOrder(node.left, d + 1);
    const right = postOrder(node.right, d + 1);
    deepest = Math.max(left, right, deepest);
    if (left === deepest && right === deepest) rs = node;
    return Math.max(left, right);
  };
  postOrder(root);
  return rs;
};

var lcaDeepestLeaves = function (root) {
  const postOrder = (node) => {
    if (!node) return [0, null];
    const [l_h, l_lca] = postOrder(node.left);
    const [r_h, r_lca] = postOrder(node.right);
    if (l_h > r_h) return [l_h + 1, l_lca];
    if (l_h < r_h) return [r_h + 1, r_lca];
    return [l_h + 1, node];
  };
  return postOrder(root);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);

lcaDeepestLeaves(root);
