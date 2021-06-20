/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let revHalf = null;
  let slow = head,
    fast = head;
  while(fast && fast.next) {
    fast = fast.next.next
    let slowNext = slow.next
    slow.next = revHalf
    revHalf = slow
    slow = slowNext
  }
  if(fast) {
    slow = slow.next
  }
  while(slow && slow.val === revHalf.val) {
    slow = slow.next
    revHalf = revHalf.next
  }
  return !revHalf
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

isPalindrome(new ListNode(0, new ListNode(0)))

// def isPalindrome(self, head):
//     rev = None
//     fast = head
//     while fast and fast.next:
//         fast = fast.next.next
//         rev, rev.next, head = head, rev, head.next
//     tail = head.next if fast else head
//     isPali = True
//     while rev:
//         isPali = isPali and rev.val == tail.val
//         head, head.next, rev = rev, head, rev.next
//         tail = tail.next
//     return isPali