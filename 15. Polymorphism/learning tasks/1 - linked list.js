/* linkedList.js
Write a reverse() function that takes a linked list and reverses it.

Linked list builds with new Node class:
const list = new Node(1, new Node(2, new Node(3)));
*/
/// NODE CLASS
class Node {
  constructor(value, node = null) {
    this.next = node;
    this.value = value;
  }

  getNext() {
    return this.next;
  }

  getValue() {
    return this.value;
  }
}
/// REVERSE FUNCTION
const reverse = (numbers) => {
  let stack = [];
  const findLast = (node) => {
    let value = node.getValue();
    stack.push(value);
    let next = node.getNext();
    return next ? findLast(next) : value;
  };
  findLast(numbers);

  const newNodes = (stack) => {
    if (!stack.length) return null;
    let value = stack.pop();
    return new Node(value, newNodes(stack));
  };
  return newNodes(stack);
};
