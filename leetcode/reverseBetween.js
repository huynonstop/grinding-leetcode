/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * https://leetcode.com/problems/reverse-linked-list-ii/solution/
 */
var reverseBetween = function (head, left, right) {
  if (!head.next || !head) return head;
  let prev = null;
  let cur = head;
  let cl = left - 1;
  let cr = right;
  while (cur !== null && cl) {
    cl--;
    cr--;
    prev = cur;
    cur = cur.next;
  }
  let prevLeft = prev;
  prev = null;
  let leftNode = cur;
  while (cur !== null && cr) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    cr--;
  }
  // prev = rightNode, cur = thenRight
  if (!prevLeft) head = prev;
  else prevLeft.next = prev;
  leftNode.next = cur;
  return head;
};
// https://leetcode.com/problems/reverse-linked-list-ii/discuss/30666/Simple-Java-solution-with-clear-explanation

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
reverseBetween(head, 2, 4);
