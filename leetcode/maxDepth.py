# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        return max_depth_dfs(root)


def max_depth_dfs(root):
    def dfs(node, k):
        if node:
            return max(dfs(node.left, k + 1), dfs(node.right, k + 1))
        return k

    def dfs_2(node):
        if node:
            return max(dfs(node.left), dfs(node.right)) + 1
        return 0
    return dfs(root, 0)
