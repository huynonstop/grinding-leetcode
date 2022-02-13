# Definition for a binary tree node.
from platform import node
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def invertTree(
            self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        return invert_dfs(root)


def invert_dfs(root):
    def dfs(node):
        if node:
            dfs(node.left), dfs(node.right)
            node.left, node.right = node.right, node.left
        return node
    return dfs(root)
