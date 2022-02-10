# Definition for a binary tree node.
import queue
from typing import List, Optional
from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        return level_order(root)


def level_order_bfs(root):
    res = []
    queue = deque([root] if root else [])
    while queue:
        n = len(queue)
        level = []
        for i in range(n):
            cur = queue.pop()
            level.append(cur.val)
            if cur.left:
                queue.extendleft([cur.left])
            if cur.right:
                queue.extendleft([cur.right])
        res.append(level)
    return res


def level_order_dfs(root):
    res = []

    def dfs(node, level):
        if node:
            if level >= len(res):
                res.append([])
            res[level].append(node.val)
            dfs(node.left, level + 1)
            dfs(node.right, level + 1)
    dfs(root)
    return res


def level_order_stack(root):
    res, stack = [], [root] if root else []
    while stack:
        res.append([node.val for node in stack])
        # new_stack = []
        # for node in stack:
        #     for child in [node.left, node.right]:
        #         if child:
        #             new_stack.append(child)
        # stack = new_stack
        stack = [
            child for node in stack
            for child in [node.left, node.right] if child]
    return res


root = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))
level_order_stack(root)
