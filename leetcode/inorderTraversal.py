# Definition for a binary tree node.
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        return inorder(root)


def inorder(root):
    ans = []

    def helper(node):
        if node:
            helper(node.left)
            ans.append(node.val)
            helper(node.right)
    helper(root)
    return ans