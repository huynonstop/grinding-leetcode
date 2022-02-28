# Definition for singly-linked list.

# https://leetcode.com/problems/swap-nodes-in-pairs/discuss/1775033/SWAPPING-NODES-(Not-just-the-values)-oror-Visual-Explanation-oror-Well-Explained-oror-C%2B%2B
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def swapPairs(
            self, head: Optional[ListNode]) -> Optional[ListNode]:
        return swap_pairs(head)


def swap_pairs(head):
    dummy = ListNode(0, head)
    cur = head
    prev = dummy
    while cur and cur.next:
        prev.next = cur.next
        cur.next = prev.next.next
        prev.next.next = cur
        prev = cur
        cur = cur.next
    return dummy.next
