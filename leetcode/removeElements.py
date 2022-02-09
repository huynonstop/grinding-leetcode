# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def removeElements(
            self, head: Optional[ListNode],
            val: int) -> Optional[ListNode]:
        return remove(head, val)


def remove(head, val):
    if not head:
        return head

    while head and head.val == val:
        head = head.next
        cur = head
        cur.next = None

    cur = head
    while cur:
        next = cur.next
        if next.val == val:
            cur.next = next.next
            next.next = None
        else:
            cur = next
    return head
