# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        return intersection_node_2_pointer(headA, headB)


def intersection_node_2_pointer(headA, headB):
    c1 = headA
    c2 = headB
    while c1 != c2:
        c1 = headB if c1 == None else c1.next
        c2 = headA if c2 == None else c2.next
    return c1


def intersection_node_set():
    return
