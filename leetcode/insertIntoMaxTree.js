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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function (root, val) {
  let cur = root;
  let node = new TreeNode(val);
  if (root.val < val) {
    node.left = root;
    return node;
  }
  while (cur.right !== null && cur.right.val > val) {
    cur = cur.right;
  }
  node.left = cur.right;
  cur.right = node;
  return root;
};

var insertIntoMaxTree = function (root, val) {
  if (root !== null && root.val > val) {
    root.right = insertIntoMaxTree(root.right, val);
    return root;
  }
  let node = new TreeNode(val);
  node.left = root;
  return node;
};
