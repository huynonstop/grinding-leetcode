/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let c = 1;
  let fNode = head;
  while (c++ < k) {
    fNode = fNode.next;
  }
  let tail = fNode;
  let sNode = head;
  while (tail.next) {
    tail = tail.next;
    sNode = sNode.next;
  }

  let t = sNode.val;
  sNode.val = fNode.val;
  fNode.val = t;

  return head;
};

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
swapNodes(head, 2);