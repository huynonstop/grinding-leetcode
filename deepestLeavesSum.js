import toTree from './arrayToBinTree.js';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://leetcode.com/problems/deepest-leaves-sum/discuss/463239/JavaC%2B%2BPython-Level-Traversal
 * https://leetcode.com/problems/deepest-leaves-sum/discuss/463248/Java-BFS-Clean-code-O(N)
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let max = 0;
  let helper = (node, height = 0) => {
    if (!node) return 0;
    if (height > max) max = height;
    const left = helper(node.left, height + 1);
    const right = helper(node.right, height + 1);
    if (height === max) return node.val;
    else return left + right;
  };
  return helper(root, 0);
};

var deepestLeavesSum = function (root) {
  let max = 0;
  let sum = 0;
  let helper = (node, height = 0) => {
    if (!node) return;
    if (height > max) {
      sum = 0;
      max = height;
    }
    if (height === max) {
      sum += node.val;
    }
    helper(node.left, height + 1);
    helper(node.right, height + 1);
  };
  helper(root, 0);
  return sum;
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

deepestLeavesSum(toTree([50, null, 54, 98, 6, null, null, null, 34]));
