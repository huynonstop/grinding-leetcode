"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""
from collections import deque
from typing import List
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children

class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        rs, q = [], [root] if root else []
        while q:
            rs.append([node.val for node in q])
            # for node in q:
            #     for child in node.children:
            q = [child for node in q for child in node.children if child]
        return rs