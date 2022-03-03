# Definition for a binary tree node.
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        return converter(nums)


def converter(nums):
    n = len(nums)

    def helper(l, r):
        if l > r:
            return None
        m = (l+r) >> 1
        node = TreeNode(nums[m])
        node.left = helper(l, m - 1)
        node.right = helper(m+1, r)
        return node
    return helper(0, n - 1)
