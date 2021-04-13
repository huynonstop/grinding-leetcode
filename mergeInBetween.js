import { arrayToLinkedList } from './utils/linklist.js';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let i = 0;
  let cur = list1;
  while (i < b) {
    let next = cur.next;
    if (i === a - 1) {
      cur.next = list2;
    }
    cur = next;
    i++;
  }
  while (list2.next !== null) {
    list2 = list2.next;
  }
  list2.next = cur.next;
  cur.next = null;
  return list1;
};

mergeInBetween(
  arrayToLinkedList([0, 1, 2, 3, 4, 5]),
  3,
  4,
  arrayToLinkedList([1000000, 1000001, 1000002])
);
