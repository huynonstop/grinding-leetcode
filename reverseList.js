/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head.next || !head) return head;
	let p = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return p;
};

var reverseList = function (head) {
	let prev = null;
	let cur = head;
	while (cur !== null) {
    let next = cur.next;
    cur.next = prev
		prev = cur;
		cur = next;
	}
	return prev;
};
