# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def hasPathSum(
            self, root: Optional[TreeNode],
            targetSum: int) -> bool:
        return has_path_sum(root, targetSum)


def has_path_sum(root, targetSum):
    def dfs(node, cur):
        if not node:
            return False
        if not node.left and not node.right and cur == node.val:
            return True
        return dfs(node.left, cur - node.val) or dfs(node.right, cur - node.val)

    return dfs(root, targetSum)


has_path_sum(TreeNode(1, TreeNode(2)), 1)
