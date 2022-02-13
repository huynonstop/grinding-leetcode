# Definition for a binary tree node.
from platform import node
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        return find_set(root, k)


def find_set(root, k):
    s = set()

    def dfs(node):
        if node:
            if node.val in s:
                return True
            s.add(k - node.val)
            return dfs(node.left) or dfs(node.right)
        return False

    return dfs(root)


def find_inorder(root, k):
    a = []

    def inorder(node):
        if node:
            inorder(node.left)
            a.append(node.val)
            inorder(node.right)

    inorder(root)
    l = 0
    r = len(a) - 1
    while l < r:
        if a[l] + a[r] < k:
            l += 1
        elif a[l] + a[r] > k:
            r -= 1
        else:
            return True
    return False


def find_yield(root, k):
    def inorder(root):
        if root:
            yield from inorder(root.left)
            yield root.val
            yield from inorder(root.right)

    def inorder_reversed(root):
        if root:
            yield from inorder_reversed(root.right)
            yield root.val
            yield from inorder_reversed(root.left)

    l_generator = inorder(root)
    r_generator = inorder_reversed(root)

    l, r = next(l_generator), next(r_generator)
    while l < r:
        if l + r < k:
            l = next(l_generator)
        elif l + r > k:
            r = next(r_generator)
        else:
            return True
    return False
