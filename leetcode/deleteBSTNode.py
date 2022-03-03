# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
# class Solution:
#     def deleteNode(
#             self, root: Optional[TreeNode],
#             key: int) -> Optional[TreeNode]:
#         return delete_node(root, key)


# recursively find the node that has the same value as the key,
# while setting the left/right nodes equal to the returned subtree
# Once the node is found, have to handle the below 4 cases
#   - node doesn't have left or right - return null
#   - node only has left subtree - return the left subtree
#   - node only has right subtree - return the right subtree
#   - node has both left and right - find the minimum value in the right subtree,
#   set that value to the currently found node,
#   then recursively delete the minimum value in the right subtree


def delete_node(root, key):
    def dfs(node, val):
        if not node:
            return None

        if node.val > val:
            node.left = dfs(node.left, val)

        elif node.val < val:
            node.right = dfs(node.right, val)

        else:
            if not node.right:
                return node.left

            if not node.left:
                return node.right

            most_left_right_node = node.right  # min in right
            while most_left_right_node.left:
                most_left_right_node = most_left_right_node.left
            node.val = most_left_right_node.val
            node.right = dfs(node.right, most_left_right_node.val)

            most_right_left_node = node.left  # max in left
            while most_right_left_node.right:
                most_right_left_node = most_right_left_node.right
            node.val = most_right_left_node.val
            node.left = dfs(node.left, most_right_left_node.val)

        return node

    return dfs(root, key)


delete_node(TreeNode(0), 0)
