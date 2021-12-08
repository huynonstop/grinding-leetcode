# Definition for a Node.
from typing import Optional


class Node:
    def __init__(self, val: int = 0, left: 'Node' = None,
                 right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


class Solution:
    def connect(
            self, root: 'Optional[Node]') -> 'Optional[Node]':
        connect(root)
        return root


def connect(root):
    while root and root.left:
        next = root.left
        while root:
            root.left.next = root.right
            root.right.next = root.next and root.next.left
            root = root.next
        root = next


def connect_preorder(root):
    if root and root.left:
        root.left.next = root.right
        root.right.next = root.next and root.next.left
        connect(root.left)
        connect(root.right)


root = Node(1, Node(2, Node(4), Node(5)),
            Node(3, Node(6), Node(7)))
connect(root)
