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
var sortedArrayToBST = function (nums) {
	if (nums.length === 0) return null;
	let _ = (l, h) => {
		if (l > h) return null;
		//let m = Math.floor((l + h) / 2);
		let m = Math.ceil((l + h) / 2);
		let t = new TreeNode(nums[m]);
		t.left = _(l, m - 1);
		t.right = _(m + 1, h);
		return t;
	};
	return _(0, nums.length - 1);
};

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
	if (nums.length === 0) return null;
	let stack = [];
	let root = new TreeNode(0, null, null);
	stack.push(0);
	stack.push(nums.length - 1);
	stack.push(root);
	while (stack.length) {
		let node = stack.pop();
		let r = stack.pop();
		let l = stack.pop();
		let m = Math.ceil((l + r) / 2);
		node.val = nums[m];
		if (r > m) {
			node.right = new TreeNode(0, null, null);
			stack.push(m + 1);
			stack.push(r);
			stack.push(node.right);
		}
		if (l < m) {
			node.left = new TreeNode(0, null, null);
			stack.push(l);
			stack.push(m - 1);
			stack.push(node.left);
		}
	}
	return root;
};

sortedArrayToBST([-10, -3, 0, 5, 9]);
