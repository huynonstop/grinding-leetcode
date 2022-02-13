# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def searchBST(
            self, root: Optional[TreeNode],
            val: int) -> Optional[TreeNode]:
        return search_dfs(root, val)


def search_dfs(root, val):
    def dfs(node):
        if not node:
            return None

        if node.val < val:
            return dfs(node.right)

        if node.val > val:
            return dfs(node.left)

        return node

    return dfs(root, val)
