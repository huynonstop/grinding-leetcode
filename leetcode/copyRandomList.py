"""
# Definition for a Node.

"""

from typing import Optional


class Node:
    def __init__(
            self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(
            self, head: 'Optional[Node]') -> 'Optional[Node]':
        return clone(head)


def clone_inplace(head):
    iter = head
    # create clone node
    while iter:
        nxt = iter.next
        clone = Node(iter.val)
        iter.next = clone
        clone.next = nxt
        iter = nxt

    iter = head
    # chain clone random to clone node
    while iter:
        if iter.random:
            clone = iter.next
            clone.random = iter.random.next
        iter = iter.next.next

    iter = head
    copy_iter = dummy = Node(0)
    while iter:
        next = iter.next.next
        # get clone list
        clone = iter.next
        copy_iter.next = clone
        copy_iter = clone
        # restore original list
        iter.next = next
        iter = next
    return dummy.next


def clone(head):
    if not head:
        return head
    d_clone = dict()
    d_original = dict()
    cur = head
    while cur:
        clone = Node(cur.val)
        d_original[clone] = cur
        d_clone[cur] = clone
        cur = cur.next

    clone_cur = res = d_clone[head]  # clone head
    while clone_cur:
        original = d_original[cur]
        clone_cur.random = d_clone[original.random] if original.random else None
        clone_cur.next = d_clone[original.next] if original.next else None
        clone_cur = clone_cur.next
    return res


node1 = Node(3)
node2 = Node(3)
node3 = Node(3)
node1.random = None
node1.next = node2
node2.random = node1
node2.next = node3
node3.random = None
node3.next = None
clone(node1)
