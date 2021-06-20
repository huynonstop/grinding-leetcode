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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  const dfs = (node) => {
    if (!node) return true;
    if (!node.left && !node.right && node.val === target) return true;
    const isLeft = dfs(node.left);
    if (isLeft) node.left = null;
    const isRight = dfs(node.right);
    if (isRight) node.right = null;
    if (isLeft && isRight && node.val === target) return true;
    return false;
  };
  return dfs(root) ? null : root;
};

var removeLeafNodes = function (root, target) {
  if (!root) return null;
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  return root.left === root.right && root.val === target ? null : root;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
removeLeafNodes(tree, 1);
