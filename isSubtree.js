/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://leetcode.com/problems/subtree-of-another-tree/discuss/102741/Python-Straightforward-with-Explanation-(O(ST)-and-O(S%2BT)-approaches)
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

let isEquals = (t1, t2) => {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  return (
    t1.val === t2.val &&
    isEquals(t1.left, t2.left) &&
    isEquals(t1.right, t2.right)
  );
};
var isSubtree = function (s, t) {
  if (!s) return false;
  return isEquals(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
isSubtree(
  new TreeNode(
    3,
    new TreeNode(4, new TreeNode(1)),
    new TreeNode(5, new TreeNode(2))
  ),
  new TreeNode(3, new TreeNode(1), new TreeNode(2))
);
