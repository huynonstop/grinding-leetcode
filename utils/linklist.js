function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export const arrayToLinkedList = (array) => {
  const list = add(null, array[0]);
  let cur = list;
  for (let i = 1; i < array.length; i++) {
    cur = add(cur, array[i]);
  }
  return list;
};

const add = (pre, val) => {
  const node = new ListNode(val);
  if (pre === null) {
    pre = node;
    return node;
  }
  pre.next = node;
  return node;
};
