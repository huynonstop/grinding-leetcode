# Definition for a binary tree node.
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def pathSum(self, root: Optional[TreeNode],
                targetSum: int) -> List[List[int]]:
        return path_sum(root, targetSum)


def path_sum(root, target):
    res = []
    path = []

    # def dfs(root, sum, ls, res):
    #   if root:
    #       if not root.left and not root.right and sum == root.val:
    #           ls.append(root.val)
    #           res.append(ls)
    #       dfs(root.left, sum-root.val, ls+[root.val], res)
    #       dfs(root.right, sum-root.val, ls+[root.val], res)

    def dfs(node, pre_sum):
        if not node:
            return

        if not node.left and not node.right:
            if pre_sum + node.val == target:
                res.append(path[:] + [node.val])
            return

        path.append(node.val)
        dfs(node.left, pre_sum + node.val)
        path.pop()

        path.append(node.val)
        dfs(node.right, pre_sum + node.val)
        path.pop()
    dfs(root, 0)
    return res


root = TreeNode(
    5, TreeNode(4, TreeNode(11, TreeNode(7),
                            TreeNode(2))),
    TreeNode(
        8, TreeNode(13),
        TreeNode(4, TreeNode(5, TreeNode(1)))))
path_sum(root, 22)
