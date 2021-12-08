# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def mergeTrees(
            self, root1: Optional[TreeNode],
            root2: Optional[TreeNode]) -> Optional[TreeNode]:
        return merge_trees_dfs(root1, root2)


def merge_trees_dfs(root1, root2):
    if root1 is None and root2 is None:
        return None
    elif root1 is None:
        node = TreeNode(root2.val)
        node.left = merge_trees_dfs(None, root2.left)
        node.right = merge_trees_dfs(None, root2.right)
    elif root2 is None:
        node = TreeNode(root1.val)
        node.left = merge_trees_dfs(root1.left, None)
        node.right = merge_trees_dfs(root1.right, None)
    else:
        node = TreeNode(root1.val + root2.val)
        node.left = merge_trees_dfs(root1.left, root2.left)
        node.right = merge_trees_dfs(root1.right, root2.right)

    return node


def merge_trees_dfs_optimize(root1, root2):
    if root1 is None or root2 is None:
        return root1 or root2
    node = TreeNode(root1.val + root2.val)
    node.left = merge_trees_dfs(root1.left, root2.left)
    node.right = merge_trees_dfs(root1.right, root2.right)
    return node


root1 = TreeNode(1, TreeNode(2, TreeNode(3)))
root2 = TreeNode(1, None, TreeNode(2, None, TreeNode(3)))

merge_trees_dfs(root1, root2)
