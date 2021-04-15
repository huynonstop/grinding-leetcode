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
 */
var FindElements = function (root) {
  const helper = (node, val) => {
    node.val = val;
    if (node.left) {
      helper(node.left, 2 * val + 1);
    }
    if (node.right) {
      helper(node.right, 2 * val + 2);
    }
    return node;
  };
  this.root = helper(root, 0);
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  const path = [];
  while (target) {
    path.push(target % 2);
    let t = target % 2 ? 1 : 2;
    target = (target - t) / 2;
  }
  let cur = this.root;
  while (path.length) {
    cur = cur[path.pop() ? 'left' : 'right'];
    if (!cur) return false;
  }
  return true;
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
var FindElements = function (root) {
  this.root = root;
};

FindElements.prototype.find = function (target) {
  const bin = [];
  let t = target + 1;
  while (t) {
    bin.push(t & 1);
    t = Math.floor(t / 2);
  }
  let cur = this.root;
  bin.pop();
  while (bin.length) {
    cur = cur[bin.pop() ? 'right' : 'left'];
    if (!cur) return false;
  }
  return true;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let root = new TreeNode(-1, undefined, new TreeNode(-1));
let f = new FindElements(root);
f.find(2); // return False
f.find(2); // return True
f.find(5); // return True
