/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => b - a);
  const deque = new DequeLinkedList();
  for (const d of deck) {
    const head = deque.removeTail();
    if (head) {
      deque.addHead(head);
    }
    deque.addHead(new Node(d));
  }
  return deque.toArray();
};

var deckRevealedIncreasing = function (deck) {
  let n = deck.length;
  const deque = new DequeLinkedList();
  deque.fromArrayIndex(deck);
  const rs = Array(n);
  deck.sort((a, b) => a - b);
  for (const d of deck) {
    rs[deque.removeHead().val] = d;
    if (deque.head) deque.addTail(deque.removeHead());
  }
  return rs;
};

class Node {
  constructor(val, next, pre) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.pre = pre === undefined ? null : pre;
  }
}

class DequeLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return node;
    }
    node.next = this.head;
    this.head.pre = node;
    this.head = node;
    return node;
  }

  removeHead() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.tail = null;
    }
    const t = this.head;
    this.head = t.next;
    if (this.head) this.head.pre = null;
    t.next = null;
    return t;
  }

  addTail(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
      return node;
    }
    this.tail.next = node;
    node.pre = this.tail;
    this.tail = node;
    return node;
  }

  removeTail() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.head = null;
    }
    const t = this.tail;
    this.tail = t.pre;
    if (this.tail) this.tail.next = null;
    t.pre = null;
    return t;
  }

  toArray() {
    const array = [];
    let cur = this.head;
    while (cur !== null) {
      array.push(cur.val);
      cur = cur.next;
    }
    return array;
  }

  fromArray(array) {
    for (const a of array) {
      this.addTail(new Node(a));
    }
  }

  fromArrayIndex(array) {
    for (let i = 0; i < array.length; i++) {
      this.addTail(new Node(i));
    }
  }
}
deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]);
