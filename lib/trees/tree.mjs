// nodes with pointers to other nodes
// child, parent, siblings, descendant, ancestor
// root (top node), level (nodes at level 1 are children of the root), leaf, height=depth of a tree (max level in the tree)
// branching factor (the mac number of children that any node has)
// balancing = inserting entries into a sorted tree in such a way that minimizes the tree's depth
// BST binary search tree is a sorted tree with a branching factor of two; left < parent < right
// strngths: memory-efficient, flexible (can be balanced), searching in a sorted tree is O(tree height)
// weaknesses: harder to debug, require recursion, need to balance based on expected use case; rearranging the tree completely is expensive
// use trees when: sorted data that you need to do a lot of searches on; you need to manage hierarchically ordanized objects (files/directories); to implement a search strategy such as backtracking
// BST: insert, delete, search, get are O(log n)


export class MyBinaryTreeNode {
  constructor(x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }
}


export class MyBinaryTree {
  constructor() {
    this.root = null;
  }

  populate(values) {
    this.root = new MyBinaryTreeNode(values[0]);
    this.addChildren(this.root, values.slice(1));
    return this;
  }

  addChildren(node, values) {
    let remainingValues = values.length;
    let startIdx = 0;

    if (values[0]) {
      node.left = new MyBinaryTreeNode(values[0]);
      remainingValues--;
      startIdx++;
    }
    if (values[1]) {
      node.right = new MyBinaryTreeNode(values[1]);
      remainingValues--;
      startIdx++;
    }

    if (!remainingValues) {
      return;
    }

    const mid = Math.floor(remainingValues / 2);
    const [lefts, rights] = [values.slice(startIdx, mid), values.slice(mid)];
    this.addChildren(node.left, lefts);
    this.addChildren(node.right, rights);
  }
}


export class MyBinarySearchTree {
  constructor(x) {
    this._root = new MyBinaryTreeNode(x);
  }

  get root() {
    return this._root;
  }

  insert(obj) {
    if (!this.root) {
      this.root = new MyBinaryTreeNode(obj);
      return;
    }

    this.insertAfter(obj, this.root);
  }
  delete() {}
  search() {}
  get() {}
  rank() {}
  flatten() {}
  insertAfter(obj, node) {
    let nextNode = obj <= node ? node.left : node.right;
    if (!nextNode) {return;}
  }
}
