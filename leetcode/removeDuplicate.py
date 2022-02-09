# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteDuplicates(
            self, head: Optional[ListNode]) -> Optional[ListNode]:
        return delete(head)


def delete(head):
    dummy = pre = ListNode(0, head)
    cur = head
    while cur and cur.next:
        if cur.val == cur.next.val:
            while cur and cur.next and cur.val == cur.next.val:
                cur = cur.next
            pre.next = cur  # delete duplicates node
        else:
            pre = pre.next
            cur = cur.next
    return dummy.next
