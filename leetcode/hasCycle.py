# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        return has_cycle(head)


def has_cycle(head):
    s = set()
    cur = head
    while cur != None:
        if cur in s:
            return True
        s.add(cur)
        cur = cur.next
    return False


def has_cycle_2pointer(head):
    fast = head
    slow = head
    while fast != None and fast.next != None:
        fast = fast.next.next
        slow = slow.next
        if fast == slow:
            return True
    return False
