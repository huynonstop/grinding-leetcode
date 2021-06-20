/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const rs = [];
  const dfs = (node, level = 0) => {
    if (!node) return;
    if (!rs[level]) rs[level] = [];
    rs[level].push(node.val);
    for (let c of node.children) {
      dfs(c, level + 1);
    }
  };
  dfs(root);
  return rs;
};

var levelOrder = function (root) {
  const rs = [];
  const stack = [[root, 0]];
  while (stack.length) {
    const [node, level] = stack.pop();
    if (!rs[level]) rs[level] = [];
    rs[level].push(node.val);
    for (let c of node.children) {
      stack.push([c, level + 1]);
    }
  }
  return rs;
};
