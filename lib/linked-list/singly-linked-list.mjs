export const test = 'test';
export class MyNode {


  constructor(d) {
    this.data = d;
    this.next = null;
  }

  appendToTail (d) {
    const end = new MyNode(d);
    let n = this;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = end;
  }
}

function deleteNode(node, d) {
  if (node.data === d) {
    return node.next;
  }

  let current = node;
  while (current.next !== null) {
    if (current.next.data === d) {
      current.next = current.next.next;
      return node;
    }
    current = current.next;
  }

  return node;
}


