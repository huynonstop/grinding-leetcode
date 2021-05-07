/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/discuss/161268/C%2B%2BJavaPython-One-Pass-Real-O(N)
var constructFromPrePost = function (pre, post) {
  let preI = 0,
    postI = 0;
  const helper = () => {
    const root = new TreeNode(pre[preI++]);
    if (root.val !== post[postI]) {
      root.left = helper(pre, post);
    }
    if (root.val !== post[postI]) {
      root.right = helper(pre, post);
    }
    postI++;
    return root;
  };
  return helper();
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]);
