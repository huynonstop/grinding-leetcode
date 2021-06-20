/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};

var lowestCommonAncestor = function (root, p, q) {
  let cur = root;
  while (cur) {
    if (cur.val < p.val && cur.val < q.val) {
      cur = cur.right;
    } else if (cur.val > p.val && cur.val > q.val) {
      cur = cur.left;
    } else return cur;
  }
  return null;
};
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
lowestCommonAncestor(
  new TreeNode(
    6,
    new TreeNode(
      2,
      new TreeNode(0),
      new TreeNode(4, new TreeNode(3), new TreeNode(5))
    ),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
  ),
  2,
  8
);
