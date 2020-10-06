/* binarySearchTreeGenerator.js
https://en.wikipedia.org/wiki/Binary_search_tree
Write Node class that creates a node for the binary search tree.  The class should contain:
--- getKey() method - return key or null
--- getLeft() and getRight() methods - should return left and right children or null for each
--- insert(key) - adds node by the rules of the legit binary search tree.
See tests for examples of work.
*/
export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
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
  insert(key) {
    if (!this.getKey() || this.getKey() === key) {
      this.key = key;
    } else {
      if (key < this.getKey()) {
        return !this.getLeft()
          ? (this.left = new Node(key))
          : this.left.insert(key);
      }
      return !this.getRight()
        ? (this.right = new Node(key))
        : this.right.insert(key);
    }
  }
}

/////// TEST 1 - simple tree
const tree3 = new Node();
tree3.insert(9);
tree3.insert(4);
tree3.insert(17);
tree3.insert(28);

console.log(tree3.getKey()); // 9
console.log(tree3.getLeft().getKey()); // 4
console.log(tree3.getRight().getKey()); // 17

/////// TEST 2 - empty tree
const tree2 = new Node();
console.log(tree2.getKey()); // null
console.log(tree2.getLeft()); // null
console.log(tree2.getRight()); // null

///// TEST 3
const tree = new Node();
tree.insert(9);
tree.insert(17);
tree.insert(4);
tree.insert(3);
tree.insert(6);
tree.insert(22);
tree.insert(5);
tree.insert(7);
tree.insert(20);
tree.insert(4);
tree.insert(3);

console.log(tree.getKey()); // 9
console.log(tree.getLeft().getKey()); // 4
console.log(tree.getLeft().getLeft().getKey()); // 3);
console.log(tree.getLeft().getLeft().getLeft()); // null
console.log(tree.getLeft().getLeft().getRight()); // null
console.log(tree.getLeft().getRight().getKey()); // 6
console.log(tree.getLeft().getRight().getLeft().getKey()); // 5
console.log(tree.getLeft().getRight().getLeft().getLeft()); // null
console.log(tree.getLeft().getRight().getLeft().getRight()); // null
console.log(tree.getLeft().getRight().getRight().getKey()); // 7
console.log(tree.getLeft().getRight().getRight().getLeft()); // null
console.log(tree.getLeft().getRight().getRight().getRight()); // null
console.log(tree.getRight().getKey()); // 17
console.log(tree.getRight().getLeft()); // null
console.log(tree.getRight().getRight().getKey()); // 22
console.log(tree.getRight().getRight().getRight()); // null
console.log(tree.getRight().getRight().getLeft().getKey()); // 20
console.log(tree.getRight().getRight().getLeft().getLeft()); // null
console.log(tree.getRight().getRight().getLeft().getRight()); // null
