/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  while (head && head.val === val) {
    let cur = head;
    head = head.next;
    cur.next = null;
  }
  if(!head) return head;
  let cur = head;
  while(cur.next) {
    let next = cur.next;
    if(next.val === val) {
      cur.next = next.next;
      next.next = null;
    } else {
      cur = cur.next;
    }
  }
  return head;
};