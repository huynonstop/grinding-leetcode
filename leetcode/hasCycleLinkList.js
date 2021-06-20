/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	const hashMap = new Map();
  const traverse = (head) => {
    if(hashMap.has(head)) return true;
    if(!head) return false;
    hashMap.add(head,true)
    return traverse(head.next)
  }
	return traverse(head);
};
