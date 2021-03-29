/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  let array1 = [],
    array2 = [];
  inOrder(root1, array1);
  inOrder(root2, array2);
  return mergeSortArray(array1, array2);
};

const inOrder = (root, array) => {
  if (!root) return;
  inOrder(root.left, array);
  array.push(root.val);
  inOrder(root.right, array);
  return array;
};

const mergeSortArray = (array1, array2) => {
  let rs = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      rs.push(array1[i++]);
    } else {
      rs.push(array2[j++]);
    }
  }
  while (i < array1.length) {
    rs.push(array1[i++]);
  }
  while (j < array2.length) {
    rs.push(array2[j++]);
  }
  return rs;
};
