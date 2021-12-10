# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(
            self, list1: Optional[ListNode],
            list2: Optional[ListNode]) -> Optional[ListNode]:
        return merge_two_lists(list1, list2)


def merge_two_lists(list1, list2):
    if list1 is None or list2 is None:
        return list1 or list2

    if list1.val < list2.val:
        list1.next = merge_two_lists(list1.next, list2)
        return list1
    else:
        list2.next = merge_two_lists(list1, list2.next)
        return list2


def merge_two_lists_iterative(list1, list2):
    dummy = cur = ListNode(0)
    while list1 and list2:
        if list1.val < list2.val:
            cur.next = list1
            list1 = list1.next
        else:
            cur.next = list2
            list2 = list2.next
        cur = cur.next
    cur.next = list1 or list2
    return dummy.next


def merge_two_lists_iterative_2(list1, list2):
    if list1 is None or (list2 and list1.val > list2.val):
        list1, list2 = list2, list1

    cur = list1
    while cur and list2:
        if cur.next is None or (cur.next.val > list2.val):
            cur.next, list2 = list2, cur.next
        cur = cur.next
    return list1


list1 = ListNode(1, ListNode(2, ListNode(4)))
list2 = ListNode(1, ListNode(3, ListNode(4)))

a = merge_two_lists(list1, list2)

while a:
    print(a.val)
    a = a.next
