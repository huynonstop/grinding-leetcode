# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def removeNthFromEnd(
            self, head: Optional[ListNode],
            n: int) -> Optional[ListNode]:
        fast_node = head
        for i in range(n):
            fast_node = fast_node.next

        if fast_node is None:
            head = head.next
        else:
            slow_node = head
            while fast_node.next is not None:
                fast_node = fast_node.next
                slow_node = slow_node.next

            slow_node.next = slow_node.next.next
        return head


def remove_nth_from_end_array(head, n):
    a = []
    node = head
    while node is not None:
        a.append(node)
        node = node.next

    if len(a) == n:
        head = head.next
    else:
        pre_node = a[len(a) - n - 1]
        pre_node.next = pre_node.next.next

    return head


def remove_nth_from_end_count_recursive(head, n):
    def remove(head, n):
        if head is None:
            return head, 0

        next, count = remove(head.next, n)
        count += 1
        head.next = next
        if count == n:
            head = head.next

        return head, count
    return remove(head, n)[0]
