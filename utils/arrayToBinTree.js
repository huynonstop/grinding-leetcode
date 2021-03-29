export default (array, Tree = TreeNode) => {
  const n = array.length;
  const root = null;
  const helper = (node, i) => {
    if (i < n) {
      node = new Tree(array[i]);
      node.left = helper(node.left, 2 * i + 1);
      node.right = helper(node.right, 2 * i + 2);
    }
    return node;
  };
  const tree = helper(root, 0);
  console.log(visual(tree));
  return tree;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export function visual(root) {
  const heightArray = [];
  const helper = (node, h) => {
    if (!node) return;
    if (!heightArray[h]) {
      heightArray[h] = [];
    }
    heightArray[h].push(node.val);
    helper(node.left, h + 1);
    helper(node.right, h + 1);
  };
  helper(root, 0);
  return heightArray;
}
