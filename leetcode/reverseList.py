# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseList(
            self, head: Optional[ListNode]) -> Optional[ListNode]:
        return reverse_list(head)


def reverse_list(node, pre=None):
    if node is None:
        return pre

    nxt = node.next
    node.next = pre

    return reverse_list(nxt, node)


def reverse_list_iterative(head):
    prev = None
    cur = head
    while cur:
        cur.next, prev, cur = prev, cur, cur.next
    return prev


list1 = ListNode(1, ListNode(
    2, ListNode(3, ListNode(4, ListNode(5)))))

a = reverse_list(list1)

while a:
    print(a.val)
    a = a.next
