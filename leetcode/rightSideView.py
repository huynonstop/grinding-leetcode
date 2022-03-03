# Definition for a binary tree node.
from collections import deque
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        return right_side(root)


def right_side(root):
    res = []
    queue = deque()
    queue.append(node)
    while queue:
        right = None
        l = len(queue)
        for _ in range(l):
            right = queue.popleft()
            if right.left:
                queue.append(right.left)
            if right.right:
                queue.append(right.right)
        res.append(right.val)
    return res


root = TreeNode(
    1, TreeNode(2, None, TreeNode(5)),
    TreeNode(3, None, TreeNode(4)))
right_side(root)
