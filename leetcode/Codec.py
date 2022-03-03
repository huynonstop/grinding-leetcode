# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Codec:
    def __init__(self) -> None:
        self.nn = '#'
        self.separator = ','

    def serialize(self, root):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """
        node_vals = []

        def preorder_serial(node):
            if node:
                node_vals.append(node.val)
                preorder_serial(node.left)
                preorder_serial(node.right)
            else:
                node_vals.append(self.nn)

        preorder_serial(root)
        return self.separator.join(node_vals)

    def deserialize(self, data):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """
        node_vals = iter(data.split(self.separator))

        def preorder_deserial():
            cur = next(node_vals)
            if cur == self.nn:
                return None
            node = TreeNode(cur)
            node.left = preorder_deserial()
            node.right = preorder_deserial()
            return node
        return preorder_deserial()


# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
