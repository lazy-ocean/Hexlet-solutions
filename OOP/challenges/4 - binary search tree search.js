/* binarySearchTree.js
https://en.wikipedia.org/wiki/Binary_search_tree
Write Node class that creates a node for the binary search tree. Constructor takes a number = key, and two children, which are also nodes. The class should contain:
--- getKey() method - return key or null
--- getLeft() and getRight() methods - should return left and right children or null for each
--- search(key) - searches for the key in the RIGHT binary tree. If no such key, return null;
See tests for examples of work.
*/
class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
  getChildren() {
    return [this.left, this.right];
  }
  getKey() {
    return this.key;
  }
  getLeft() {
    return this.left;
  }
  getRight() {
    return this.right;
  }
  search(key) {
    if (this.getKey() === key) {
      return this;
    }
    if (this.getLeft()?.getKey() >= this.getRight()?.getKey()) return;

    for (const child of this.getChildren()) {
      if (child) {
        const res = child.search(key);
        if (res) return res;
      }
    }
    return null;
  }
}

///// TESTS
const tree = new Node(9, new Node(4), new Node(17));
console.log(tree.getKey()); // 9
console.log(tree.getLeft().getKey()); // 4
console.log(tree.getRight().getKey()); // 17

const tree1 = new Node();

console.log(tree1.getKey()); // null
console.log(tree1.getLeft()); // null
console.log(tree1.getRight()); // null

const expected1 = new Node(5);
const expected2 = new Node(22, new Node(20), null);
const tree3 = new Node(
  9,
  new Node(4, new Node(3), new Node(6, expected1, new Node(7))),
  new Node(17, null, expected2)
);

console.log(tree3.search(5)); // new Node(5);
console.log(tree3.search(22)); // new Node(22, new Node(20), null);
console.log(tree3.search(35)); // null
console.log(tree3.search(2)); // null
