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
var pseudoPalindromicPaths = function (root) {
  const count = Array(10).fill(0);
  let rs = 0;
  const dfs = (node) => {
    count[node.val]++;
    if (!node.left && !node.right) {
      const c = count.reduce((p, v) => p + (v & 1), 0);
      if (c <= 1) rs++;
      count[node.val]--;
      return;
    }
    node.left && dfs(node.left);
    node.right && dfs(node.right);
    count[node.val]--;
  };
  dfs(root);
  return rs;
};

var pseudoPalindromicPaths = function (root) {
  let rs = 0;
  const preorder = (node, path) => {
    if (node) {
      // compute the digit frequency
      path ^= 1 << node.val;
      // if it's a leaf, check that at most one digit has an odd frequency
      if (!node.left && !node.right && (path & (path - 1)) === 0) rs++;
      preorder(node.left, path);
      preorder(node.right, path);
    }
  };
  preorder(root, 0);
  return rs;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(
  2,
  new TreeNode(3, new TreeNode(3), new TreeNode(1)),
  new TreeNode(1, null, new TreeNode(1))
);

pseudoPalindromicPaths(root);
