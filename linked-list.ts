class MyLinkedList {
  head: MyNode = null;

  constructor(d: number) {
    this.head = new MyNode(d);
  }
}

class MyNode {
  next: MyNode = null;
  data: number;

  constructor(d: number) {
    this.data = d;
  }

  appendToTail(d: number): void {
    const end = new MyNode(d);
    let n = this as MyNode;
    while (n.next !== null) {
      n = n.next;
    }
    n.next = end;
  }
}

function deleteNode(node: MyNode, d: number): MyNode {
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

const myList = new MyNode(1);
myList.appendToTail(2);
console.log("hi");
console.log(deleteNode(myList, 2));
