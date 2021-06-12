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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var buildTree = function (preorder, inorder) {
  let inorderMap = {};
  let preIndex = 0;
  for (let i = 0; i < inorder.length; i++) {
    inorderMap[inorder[i]] = i;
  }
  const helper = (l, r) => {
    if (l > r) return null;
    let val = preorder[preIndex];
    preIndex++;
    let node = new TreeNode(val);
    node.left = helper(l, inorderMap[val] - 1);
    node.right = helper(inorderMap[val] + 1, r);
    return node;
  };
  return helper(preIndex, preorder.length - 1);
};

var buildTree = function (preorder, inorder) {
  let p = 0;
  let i = 0;
  let build = function (stop) {
    if (inorder[i] !== stop) {
      var root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  };
  return build();
};
