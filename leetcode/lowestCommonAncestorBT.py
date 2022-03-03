# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode',
                             q: 'TreeNode') -> 'TreeNode':
        return lca(root, p, q)


def lca(root, p, q):
    def helper(node):
        if not node or node == p or node == q:
            return node
        left, right = helper(node.left), helper(node.right)
        return node if left and right else left or right
    return helper(root)


def lca_2(root, p, q):
    ans = {'val': None}

    def helper(node):
        if ans['val']:
            return False
        if not node:
            return False
        left = helper(node.left)
        right = helper(node.right)
        cur = node == p or node == q
        if left + right + cur >= 2:
            ans['val'] = node
        return left or right or cur

    helper(root)
    return ans['val']
