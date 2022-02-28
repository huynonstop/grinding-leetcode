# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def detectCycle(
            self, head: Optional[ListNode]) -> Optional[ListNode]:
        return detect_set(head)


def detect_set(head):
    s = set()
    cur = head
    while cur:
        if cur in s:
            return cur
        s.add(cur)
        cur = cur.next
    return None


def detect_2_pointer(head):
    fast = slow = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if fast == slow:
            slow = head
            while slow != fast:
                slow = slow.next
                fast = fast.next
            return fast
    return None
