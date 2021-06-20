/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const helper = (start, end) => {
    if (start > end) return null;
    let maxIndex = start;
    for (let i = start; i <= end; i++) {
      if (nums[i] > nums[maxIndex]) maxIndex = i;
    }
    const node = new TreeNode(nums[maxIndex]);
    node.left = helper(start, maxIndex - 1);
    node.right = helper(maxIndex + 1, end);
    return node;
  };
  return helper(0, nums.length - 1);
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
constructMaximumBinaryTree([3,2,1,6,0,5])