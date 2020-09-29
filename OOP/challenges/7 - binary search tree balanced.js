/* isBalanced.js
Write isBalanced() method to the Node class that checks if the tree is balanced: that means that the number of nodes in the right and left subtrees would be somewhat equal (not more than +2 nodes).
See tests for the examples.
*/
export default class Node {
  constructor(key = null, left = null, right = null) {
    this.key = key;
    this.left = left;
    this.right = right;
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

  isBalanced() {
    let a = this.left?.getCount() || 0;
    let b = this.right?.getCount() || 0;
    if (Math.abs(a - b) > 2) return false;
    if (this.left !== null) {
      return this.left.isBalanced();
    }
    if (this.right !== null) {
      return this.right.isBalanced();
    }
    return true;
  }
}

//////// TESTS
const tree = new Node(4, new Node(3, new Node(2)));

console.log(tree.isBalanced()); // true

const tree2 = new Node(4, new Node(3, new Node(2, new Node(1))));

console.log(tree2.isBalanced()); // false

const tree3 = new Node(4, new Node(3, new Node(2, new Node(1))), new Node(5));

console.log(tree3.isBalanced()); // true

const tree4 = new Node(
  9,
  new Node(4, new Node(3), new Node(6, new Node(5), new Node(7))),
  new Node(17, null, new Node(22, null, new Node(20)))
);

console.log(tree4.isBalanced()); // true

const tree5 = new Node(
  8,
  new Node(5, null, new Node(6, new Node(4))),
  new Node(12, new Node(10, null, new Node(11)), new Node(14))
);

console.log(tree5.isBalanced()); // true

const tree6 = new Node(
  8,
  new Node(5, new Node(4, new Node(1), new Node(3, new Node(2))), new Node(6)),
  new Node(12, new Node(10, null, new Node(11)), new Node(14))
);

console.log(tree6.isBalanced()); // false

const tree7 = new Node(
  12,
  new Node(
    5,
    new Node(1, null, new Node(2, null, new Node(3, null, new Node(4)))),
    new Node(
      10,
      new Node(8, new Node(7, new Node(6)), new Node(9)),
      new Node(11)
    )
  ),
  new Node(15, new Node(14, new Node(13)))
);

console.log(tree7.isBalanced()); // false
