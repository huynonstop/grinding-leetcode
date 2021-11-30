# Definition for a binary tree node.
from typing import Optional, Tuple


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def is_valid_bst(node):
    if not node:
        return True, None, None

    is_left, left_left_most, left_right_most = is_valid_bst(
        node.left)
    if is_left and left_right_most:
        is_left = node.val > left_right_most

    is_right, right_left_most, right_right_most = is_valid_bst(
        node.right)
    if is_right and right_left_most:
        is_right = node.val < right_left_most

    return is_left and is_right, left_left_most or node.val, right_right_most or node.val

# min max val


def is_valid_min_max(
        root, floor=float('-inf'),
        ceiling=float('inf')):
    if not root:
        return True
    if root.val <= floor or root.val >= ceiling:
        return False
    # in the left branch, root is the new ceiling; contrarily root is the new floor in right branch
    return is_valid_min_max(
        root.left, floor, root.val) and is_valid_min_max(
        root.right, root.val, ceiling)

# inOrder travelsal


prev = None


def in_order_valid(node):
    global prev

    if not node:
        return True

    if(not in_order_valid(node.left)):
        return False

    if (prev is not None and prev.val >= node.val):
        return False
    prev = node
    return in_order_valid(node.right)


def in_order_valid_i(root):
    if not root:
        return True

    node = root
    stack = []
    pre = None
    while(node or len(stack)):
        while(node):
            stack.append(node)
            node = node.left

        node = stack.pop()
        if(pre and pre.val >= node.val):
            return False
        pre = node
        node = node.right

    return True


class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return in_order_valid(root)


root = TreeNode(0
                )
print(in_order_valid(root))
