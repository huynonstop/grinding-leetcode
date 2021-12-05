# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def middleNode(
            self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = head
        fast = head

        while fast is not None and fast.next is not None:
            slow = slow.next
            fast = fast.next.next

        return slow if fast is not None else slow.next


head = ListNode(1, ListNode(
    2, ListNode(3, ListNode(4, ListNode(5)))))

Solution().middleNode(head)
