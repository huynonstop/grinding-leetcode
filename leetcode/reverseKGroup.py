# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseKGroup(
            self, head: Optional[ListNode],
            k: int) -> Optional[ListNode]:
        return rev_k_group(head, k)


def rev_k_group(head, k):
    if not head or not head.next or k == 1:
        return head
    dummy = ListNode(-1, head)
    begin = dummy
    i = 0
    cur = head
    while cur != None:
        i += 1
        if i % k == 0:
            begin = rev(begin, cur.next)
            cur = begin.next
        else:
            cur = cur.next
    return dummy.next


def rev(begin, end):
    cur = begin.next
    head = cur
    prev = begin
    while cur != end:
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    begin.next = prev
    head.next = cur
    return head


rev_k_group(
    ListNode(
        1, ListNode(
            2, ListNode(3, ListNode(4, ListNode(5))))),
    2)
