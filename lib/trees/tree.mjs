/**
 * nodes with pointers to other nodes
  child, parent, siblings, descendant, ancestor
  root (top node), level (nodes at level 1 are children of the root), leaf, height=depth of a tree (max level in the tree)
  branching factor (the mac number of children that any node has)

  balancing = inserting entries into a sorted tree in such a way that minimizes the tree's depth

  BST binary search tree is a sorted tree with a branching factor of two; left < parent < right
  BST: insert, delete, search, get are O(log n)

  strengths: memory-efficient, flexible (can be balanced), searching in a sorted tree is O(tree height)
  weaknesses: harder to debug, require recursion, need to balance based on expected use case; rearranging the tree completely is expensive
  use trees when: sorted data that you need to do a lot of searches on; you need to manage hierarchically ordanized objects (files/directories); to implement a search strategy such as backtracking

  What kind of tree have you got? binary or n-ary; binary or BST? balanced (O(log n) times for insert and find), unbalanced, or perfectly balanced? if balanced, is it red-black, AVL?
  complete binary tree: every level is filled before the last one; the last level is filled left to right
  full binary tree: every node has either zero or two children
  perfect binary tree: complete and full

  Binary Heap, min - a complete binary tree where each node is smaller than its children, so the root is the min el; operations: insert and extract_min
 */




export class MyBinaryTreeNode {
  constructor(x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }
}

export class MyMinHeap {
  constructor() {
    this.root = null;
  }

  insert(val) {

  }
}

export class MyBinaryTree {
  constructor() {
    this.root = null;
  }

  generateCompleteTree(values) {
    this.root = new MyBinaryTreeNode(values[0]);
    this.addChildrenLeftToRight(this.root, values, 0);
    return this;
  }

  addChildrenLeftToRight(parent, values, parentIdx) {
    let leftIdx = parentIdx * 2 + 1;

    parent.left = leftIdx < values.length ? new MyBinaryTreeNode(values[leftIdx]) : null;
    let rightIdx = leftIdx + 1;
    parent.right = rightIdx < values.length ? new MyBinaryTreeNode(values[rightIdx]) : null;

    if (leftIdx >= values.length || rightIdx >= values.length) {
      return;
    }

    this.addChildrenLeftToRight(parent.left, values, leftIdx);
    this.addChildrenLeftToRight(parent.right, values, rightIdx);
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

export function inOrderTraversal(node) {
  if (node) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
  }
}
export function preOrderTraversal(node) {
  if (node) {
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}
export function postOrderTraversal(node) {
  if (node) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
  }
}
const node = new MyBinaryTree().generateCompleteTree([1,2,3,4,5,6, 7, 8, 9, 10]).root;
console.log('in order traversal');
inOrderTraversal(node);
console.log('pre order traversal');
preOrderTraversal(node);
console.log('post order traversal');
postOrderTraversal(node);
