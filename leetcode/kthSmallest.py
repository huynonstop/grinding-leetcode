# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
# class Solution:
#     def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
#         return kth(root, k)


def kth(root, k):
    res = {'i': 0, 'val': None}

    def in_order(node):
        if res['val']:
            return
        if node.left:
            in_order(node.left)
        res['i'] += 1
        if res['i'] == k:
            res['val'] = node.val
            return
        if node.right:
            in_order(node.right)

    in_order(root)
    return res['val']


def kth_array(root, k):
    res = []

    def in_order(node):
        if node:
            in_order(node.left)
            res.append(node.val)
            in_order(node.right)
    in_order(root)
    return res[k-1]


root = TreeNode(3, TreeNode(1, None, TreeNode(2)), TreeNode(4))
kth(root, 1)
