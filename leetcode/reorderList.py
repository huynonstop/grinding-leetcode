# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        return reorder_list(head)


def reorder_list_inplace(head):
    if head:
        mid = head
        fast = head
        while fast and fast.next:
            mid = mid.next
            fast = fast.next.next

        pre = None
        cur = mid.next
        while cur:
            next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        mid.next = None

        cur = head
        cur2 = pre
        while cur and cur2:
            next = cur.next
            next2 = cur2.next
            cur.next = cur2
            cur2.next = next
            cur = next
            cur2 = next2


def reorder_list_stack(head):
    stack = []
    cur = head
    while cur:
        stack.append(cur)
        cur = cur.next

    n = len(stack)
    mid = stack[-(n-1) >> 1]
    cur = head
    while cur != mid:
        next = cur.next
        cur.next = stack[-1]
        stack.pop()
        cur.next.next = next
        cur = next
    cur.next = None


reorder_list_inplace(
    ListNode(1, ListNode(2, ListNode(3, ListNode(4)))))
reorder_list_inplace(ListNode(1, ListNode(2, ListNode(3))))
