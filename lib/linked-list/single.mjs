import { MyNode } from '../../lib/linked-list/singly-linked-list.mjs';


      const firstNode = new MyNode();
      const secondNode = new MyNode(2);
      firstNode.data = 1;
      firstNode.next = secondNode;

      console.log(firstNode.next.data);

