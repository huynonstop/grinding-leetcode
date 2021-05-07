export default (array, Tree = TreeNode, visual = false) => {
  // preOrder array
  const n = array.length;
  const helper = (i) => {
    let node = null;
    if (i < n) {
      node = new Tree(array[i]);
      node.left = helper(2 * i + 1);
      node.right = helper(2 * i + 2);
    }
    return node;
  };
  const tree = helper(0);
  if (visual) console.log(visualTree(tree));
  return tree;
};

export const sortedArrayToBST = (array, Tree = TreeNode, visual = false) => {
  // preOrder array
  const n = array.length;
  const helper = (i, j) => {
    if (i > j) return null;
    let mid = Math.floor((i + j) / 2);
    const root = new Tree(array[mid]);
    root.left = helper(i, mid - 1);
    root.right = helper(mid + 1, j);
    return root;
  };
  const tree = helper(0, n - 1);
  if (visual) console.log(visualTree(tree));
  return tree;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export function visualTree(root) {
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

const bstToArray = (order) => (root) => {
  const array = [];
  order(root);
  return array;
};

const inOrder = (node) => {
  if (!node) return;
  inOrder(node.left);
  array.push(node.val);
  inOrder(node.right);
};

const preOrder = (node) => {
  if (!node) return;
  array.push(node.val);
  preOrder(node.left);
  preOrder(node.right);
};

export const bstToPreOrderArray = bstToArray(preOrder);
export const bstToSortedArray = bstToArray(inOrder);
