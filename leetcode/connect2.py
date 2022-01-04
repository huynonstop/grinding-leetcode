from typing import Optional


class Node:
    def __init__(self, val: int = 0, left: 'Node' = None,
                 right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


class Solution:
    def connect(self, root: 'Node') -> 'Node':
        connect(root)
        return root


def connect(node):
    while node:
        t = Node()
        c = t
        while node:
            if node.left:
                c.next = node.left
                c = c.next
            if node.right:
                c.next = node.right
                c = c.next
            node = node.next
        node = t.next

# https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/discuss/961868/Python-O(n)-solution-explained
