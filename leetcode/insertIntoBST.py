# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def insertIntoBST(
            self, root: Optional[TreeNode],
            val: int) -> Optional[TreeNode]:
        return insert_dfs(root, val)


def insert_dfs(root, val):
    def dfs(node):
        if not node:
            return TreeNode(val)

        if node.val < val:
            node.right = dfs(node.right)
        if node.val > val:
            node.left = dfs(node.left)
        return node
    return dfs(root)
