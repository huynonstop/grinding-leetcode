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


def find(node, v):
    cur = node
    while cur:
        if v > cur.val:
            cur = cur.right
        elif v < cur.val:
            cur = cur.left
        else:
            return True
    return False


def lca(root, p, q):
    if root:
        l = lca(root.left, p, q)
        r = lca(root.right, p, q)
        c = root if find(root, p.val) and find(root, q.val) else None
        return l or r or c


def lca_iter(root, p, q):
    cur = root
    while cur:
        if cur.val < p.val and cur.val < q.val:
            cur = cur.right
        elif cur.val > p.val and cur.val < q.val:
            cur = cur.left
        else:
            return cur
    return None
