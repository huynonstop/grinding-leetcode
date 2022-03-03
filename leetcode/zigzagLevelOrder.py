# Definition for a binary tree node.
from collections import deque
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        return zigzag(root)


def zigzag(root):
    res = []

    def helper(node, level):
        if node:
            if len(res) <= level:
                res.append(deque())
            cur: deque = res[level]
            if level % 2 == 0:
                cur.append(node.val)
            else:
                cur.appendleft(node.val)
            helper(node.left, level + 1)
            helper(node.right, level + 1)
    helper(root, 0)
    return res


def zigzag_bfs(root):
    res = []
    if not root:
        return res

    d_q = deque()
    d_q.append(root)
    l_to_r = True
    while d_q:
        level = []
        n = len(d_q)
        for i in range(n):
            if l_to_r:
                cur = d_q.popleft()
                if cur.left:
                    d_q.append(cur.left)
                if cur.right:
                    d_q.append(cur.right)
            else:
                cur = d_q.pop()
                if cur.right:
                    d_q.appendleft(cur.right)
                if cur.left:
                    d_q.appendleft(cur.left)
            level.append(cur.val)
        res.append(level)
        l_to_r = not l_to_r
    return res


root = TreeNode(
    1, TreeNode(2, TreeNode(4)),
    TreeNode(3, None, TreeNode(5)))
zigzag_bfs(root)
