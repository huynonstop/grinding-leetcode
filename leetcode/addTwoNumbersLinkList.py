# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(
            self, l1: Optional[ListNode],
            l2: Optional[ListNode]) -> Optional[ListNode]:
        return add(l1, l2)


def add(l1, l2):
    remain = 0
    c1 = l1
    c2 = l2
    dummy = ListNode()
    c = dummy
    while c1 or c2:
        v1 = c1.val if c1 else 0
        v2 = c2.val if c2 else 0
        v = (v1 + v2 + remain) % 10
        remain = (v1 + v2 + remain) // 10
        c.next = ListNode(v)
        if c1:
            c1 = c1.next
        if c2:
            c2 = c2.next
        c = c.next
    if remain:
        c.next = ListNode(remain)
    return dummy.next
