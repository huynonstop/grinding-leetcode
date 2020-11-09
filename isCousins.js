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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const dfs = (node, parent, v, d) => {
    if (node) {
      if (node.val === v) {
        return [d, parent];
      }
      return dfs(node.left, node, v, d + 1) || dfs(node.right, node, v, d + 1);
    }
  };
  const [dx, px, dy, py] = [...dfs(root, null, x, 0), ...dfs(root, null, y, 0)];
  return dx === dy && px != py;
};
