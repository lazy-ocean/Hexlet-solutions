/* binarySearchTreeTraversals.js
https://en.wikipedia.org/wiki/Binary_search_tree
Write Node class that creates a node for the binary search tree.  The class should contain:
--- getCount() -- returns the number of nodes
--- getSum() -- returns the sum of nodes
--- toArray() -- returns an array with all keys
--- toString() -- returns all nodes as a string
--- every(fn) - checks if every node applies to the argumented function
--- some(fn) - checks if some nodes apply to the argumented function
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

  getCount() {
    let count = 1;
    if (this.left !== null) {
      count += this.left.getCount();
    }
    if (this.right !== null) {
      count += this.right.getCount();
    }
    return count;
  }
  getSum() {
    let sum = this.key;
    if (this.left !== null) {
      sum += this.left.getSum();
    }
    if (this.right !== null) {
      sum += this.right.getSum();
    }
    return sum;
  }
  toArray() {
    let res = [this.key];
    if (this.left !== null) {
      res.push(this.left.toArray());
    }
    if (this.right !== null) {
      res.push(this.right.toArray());
    }
    return res.flat();
  }
  toString() {
    let str = this.toArray().join(", ");
    return `(${str})`;
  }
  every(fn) {
    let keys = this.toArray();
    return keys.every(fn);
  }
  some(fn) {
    let keys = this.toArray();
    return keys.some(fn);
  }
}

//// TESTS
const tree = new Node(
  9,
  new Node(4, new Node(8), new Node(6, new Node(3), new Node(7))),
  new Node(17, null, new Node(22, null, new Node(20)))
);

console.log(tree.getCount()); // 9
console.log(tree.getSum()); // 96
console.log(tree.toArray()); // [9, 4, 8, 6, 3, 7, 17, 22, 20]
console.log(tree.toString()); // '(9, 4, 8, 6, 3, 7, 17, 22, 20)'

console.log(tree.every((key) => key <= 22)); // true
console.log(tree.every((key) => key < 22)); // false
console.log(tree.some((key) => key < 4)); // true
console.log(tree.some((key) => key > 22)); // false
