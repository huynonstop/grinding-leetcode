# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSubtree(
            self, root: Optional[TreeNode],
            subRoot: Optional[TreeNode]) -> bool:
        return is_subtree(root, subRoot)


def is_subtree(root, subRoot):
    if root == None:
        return False
    return is_match(
        root, subRoot) or is_subtree(
        root.left, subRoot) or is_subtree(
        root.right, subRoot)


def is_match(root, subRoot):
    if root == None and subRoot == None:
        return True
    if root == None or subRoot == None:
        return False

    return root.val == subRoot.val and is_match(
        root.left, subRoot.left) and is_match(
        root.right, subRoot.right)


root = TreeNode(3, TreeNode(4, TreeNode(1), TreeNode(2)), TreeNode(5))
sub_root = TreeNode(4, TreeNode(1), TreeNode(2))
is_subtree(root, sub_root)

# Merkle hashing
# https://leetcode.com/problems/subtree-of-another-tree/discuss/102741/Python-Straightforward-with-Explanation-(O(ST)-and-O(S%2BT)-approaches)


def isSubtree(self, s, t):
    from hashlib import sha256

    def hash_(x):
        S = sha256()
        S.update(x)
        return S.hexdigest()

    def merkle(node):
        if not node:
            return '#'
        m_left = merkle(node.left)
        m_right = merkle(node.right)
        node.merkle = hash_(m_left + str(node.val) + m_right)
        return node.merkle

    merkle(s)
    merkle(t)

    def dfs(node):
        if not node:
            return False
        return (node.merkle == t.merkle or
                dfs(node.left) or dfs(node.right))

    return dfs(s)
