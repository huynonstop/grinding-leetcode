import { visual } from './utils/arrayToBST.js';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  const helper = (start, end) => {
    if (start > end) {
      return null;
    }
    const node = new TreeNode(preorder[start]);
    let bisect = end + 1;
    for (let i = start + 1; i <= end; i++) {
      if (preorder[i] > preorder[start]) {
        bisect = i;
        break;
      }
    }
    node.left = helper(start + 1, bisect - 1);
    node.right = helper(bisect, end);
    return node;
  };
  return helper(0, preorder.length - 1);
};

var bstFromPreorder = function (preorder) {
  let i = 0;
  const helper = (bound = Infinity) => {
    if (i >= preorder.length || preorder[i] > bound) return null;
    let node = new TreeNode(preorder[i++]);
    node.left = helper(node.val);
    node.right = helper(bound);
    return node;
  };
  return helper();
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(visual(bstFromPreorder([3, 1, 2])));
