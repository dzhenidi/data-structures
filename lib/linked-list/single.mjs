import { MyNode } from '../../lib/linked-list/singly-linked-list.mjs';

export function removeDups(l) {
  let cache = new Set();
  let dummy = new MyNode();
  dummy.next = l;
  let current = dummy;
  while (current.next !== null) {
    if (cache.has(current.next.data)) {
      current.next = current.next.next;
    } else {
      cache.add(current.next.data);
      current = current.next;
    }
  }
  return dummy.next;
}

export function createList(values) {
  const head = new MyNode();
  let current = head;
  values.forEach(value => {
    current.next = new MyNode();
    current.next.data = value;
    current = current.next;
  })
  return head.next || head;
}

