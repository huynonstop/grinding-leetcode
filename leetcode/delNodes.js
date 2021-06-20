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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 * https://leetcode.com/problems/delete-nodes-and-return-forest/discuss/328853/JavaC%2B%2BPython-Recursion-Solution
 */
var delNodes = function (root, to_delete) {
  let to_delete_set = new Set(to_delete);
  const rs = [];
  const helper = (node, isRoot) => {
    if (!node) return null;
    const isDelete = to_delete_set.has(node.val);
    if (!isDelete && isRoot) rs.push(node);
    node.left = helper(node.left, isDelete);
    node.right = helper(node.right, isDelete);
    return isDelete ? null : node;
  };
  helper(root, true);
  return rs;
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

delNodes(root, [3, 5]);
