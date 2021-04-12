// A Simple Solution is to traverse nodes in Inorder and one by one insert into a self-balancing BST like AVL tree. O(n Log n)

// An Efficient Solution can construct balanced BST in O(n) time with minimum possible height. Below are steps.
// Traverse given BST in inorder and store result in an array. This step takes O(n) time.
// Build a balanced BST from the above created sorted array using the recursive approach discussed here. This step also takes O(n) time as we traverse every element exactly once and processing an element takes O(1) time.

var balanceBST = function (root) {
  const array = bstToArray(root);
  return sortedArrayToBST(array);
};

function sortedArrayToBST(array) {
  const n = array.length;
  const helper = (i, j) => {
    if (i > j) return null;
    let mid = Math.floor((i + j) / 2);
    const root = new TreeNode(array[mid]);
    root.left = helper(i, mid - 1);
    root.right = helper(mid + 1, j);
    return root;
  };
  return helper(0, n - 1);
}

function bstToArray(root) {
  const array = [];
  const inOrder = (node) => {
    if (!node) return;
    inOrder(node.left);
    array.push(node.val);
    inOrder(node.right);
  };
  inOrder(root);
  return array;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const tree = new TreeNode(
  1,
  null,
  new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))
);
const root = balanceBST(tree);
