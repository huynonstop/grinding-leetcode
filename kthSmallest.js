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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const t = [];
  const inOrder = (node) => {
    if (!node) return;
    inOrder(node.left);
    t.push(node.val);
    inOrder(node.right);
  };
  inOrder(root);
  return t[k - 1];
};

var kthSmallest = function (root, k) {
  let i = 0;
  let n = null;
  const inOrder = (node) => {
    if (node.left != null) inOrder(node.left);
    i += 1;
    if (i === k) {
      n = node.val;
      return;
    }
    if (node.right != null) inOrder(node.right);
  };
  inOrder(root);
  return n;
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6)
);
kthSmallest(root, 4);
