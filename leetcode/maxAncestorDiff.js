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

// Top-down https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/discuss/274610/JavaC%2B%2BPython-Top-Down
// Step 1: Define a function helper, which takes three arguments as input and returns an integer.

// The first argument node is the current node, and the second argument cur_max and third argument cur_min are the maximum and minimum values along the root to the current node, respectively.

// Function helper returns cur_max - cur_min when encountering leaves. Otherwise, it calls helper on the left and right subtrees and returns their maximum.

// Step 2: Run helper on the root and return the result.
var maxAncestorDiff = function (root) {
  const dfs = (node, min, max) => {
    if (!node) return max - min;
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    return Math.max(dfs(node.left, min, max), dfs(node.right, min, max));
  };
  return dfs(root, root.val, root.val);
};

// Brute force https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/discuss/929284/Python-O(n)%3A-look-at-child-explained

// Let us traverse our tree from top to bottom with dfs function, where we pass parameters:

// node is current node we visiting
// high is maximum over all node values, which are above our node, that is the maximum among parent, parent of parent, parent of parent of parent and so on.
// low is minumum over all node values, which are above our node.
// No, we iterate over our tree and:

// Update our self.Max: look at two values abs(node.val - low) and abs(node.val - high): it will be the biggest candidates for difference between node and its ancestor, where node is lying in lower layer.
// Now, we run our dfs for left and right children, where we updated low and high values: we need to include current node.val.
// We start with dfs(root, root.val, root.val), because we do not have nodes which are above our root.
