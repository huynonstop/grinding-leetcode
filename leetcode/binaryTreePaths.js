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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let rs = [];
  let dfsPath = (node, path) => {
    if (!node) return rs;
    if (!node.left && !node.right) rs.push(path + node.val);
    dfsPath(node.left, path + node.val + '->');
    dfsPath(node.right, path + node.val + '->');
    return rs;
  };
  return dfsPath(root, '');
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

binaryTreePaths(new TreeNode(1, new TreeNode(2, null, 5), new TreeNode(3)));
