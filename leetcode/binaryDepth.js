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
 * @return {number}
 */
var maxDepth = function (root) {
	const _helper = (r, depth) => {
		if (!r) return depth;
		return Math.max(
			_helper(r.left, depth + 1),
			_helper(r.right, depth + 1)
		);
	};
	return _helper(root, 1);
};

var maxDepth = function (root) {
	if(!root) return 0
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var maxDepth = function (root) {
	if (!root) return 0;
	const stack = [{ current: root, depth: 1 }];
	let max = 1;
	while (stack.length > 0) {
		const { current, depth } = stack.pop();
		if (current) {
			max = Math.max(depth, max);
			stack.push({ root: current.left, depth: depth + 1 });
			stack.push({ root: current.right, depth: depth + 1 });
		}
	}
	return max;
};
