/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let setA = new Set();
  let curA = headA;
  while (curA) {
    setA.add(curA);
    curA = curA.next;
  }
  let curB = headB;
  while (curB) {
    if (setA.has(curB)) return curB;
    curB = curB.next;
  }
  return null;
};
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;

  // while (curA !== curB) {
  //   curA = curA.next;
  //   curB = curB.next;
  //   if (curA === curB) break;
  //   if (!curA) {
  //     curA = headB;
  //   }
  //   if (!curB) {
  //     curB = headA;
  //   }
  // }
  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }

  return curA;
};
