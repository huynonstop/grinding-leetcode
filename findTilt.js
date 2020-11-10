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
var findTilt = function (root) {
  let rs = 0;
  let dfs = (node) => {
    if (!node) return 0;
    let sumLeft = dfs(node.left);
    let sumRight = dfs(node.right);
    rs += Math.abs(sumLeft - sumRight);
    return sumLeft + sumRight + node.val;
  };
  dfs(root);
  return rs;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

findTilt(new TreeNode(1, new TreeNode(2), new TreeNode(3)))