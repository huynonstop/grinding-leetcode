# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        stack = []
        if root:
            stack.append([root.left, root.right])
        while(stack):
            left, right = stack.pop()

            if left and right:
                if left.val != right.val:
                    return False
                stack.append([left.left, right.right])
                stack.append([right.left, left.right])

            elif left or right:
                return False

        return True


def is_symmetric_dfs(root):
    def dfs(node1, node2):
        if node1 is None and node2 is None:
            return True
        if node1 is None or node2 is None:
            return False
        return node1.val == node2.val and dfs(
            node1.left, node2.right) and dfs(
            node1.right, node2.left)
    return dfs(root, root)
