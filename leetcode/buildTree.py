# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def buildTree(
            self, preorder: List[int],
            inorder: List[int]) -> Optional[TreeNode]:
        return build(preorder, inorder)


def build_map(preorder, inorder):
    global pre_i
    n = len(preorder)
    inorderMap = dict()
    for i, v in enumerate(inorder):
        inorderMap[v] = i
    pre_i = 0

    def helper(l, r):
        global pre_i
        if l > r:
            return
        val = preorder[pre_i]
        node = TreeNode(val)
        pre_i = pre_i + 1
        node.left = helper(l, inorderMap.get(val) - 1)
        node.right = helper(inorderMap.get(val) + 1, r)
        return node

    return helper(0, n - 1)


def build(preorder, inorder):
    n = len(preorder)

    def helper(p_start, i_start, i_end):
        if p_start > n - 1 or i_start > i_end:
            return
        node = TreeNode(preorder[p_start])
        idx = 0
        for i in range(i_start, i_end + 1):
            if inorder[i] == node.val:
                idx = i

        node.left = helper(p_start + 1, i_start, idx - 1)
        node.right = helper(
            p_start + idx - i_start + 1, idx + 1, i_end)

        return node

    return helper(0, 0, n - 1)
